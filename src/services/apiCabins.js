import supabase,{supabaseUrl} from "./supabase";

export async function getCabins(){

const { data, error } = await supabase
.from('cabins')
.select('*');

if(error){
    console.log(error);
    throw new Error("Cabins could not be loaded");
}

  return data;
}



export async function createEditCabin(newCabin, id) {
 
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  let imageName;
  if (!hasImagePath && newCabin.image) {
    if (typeof newCabin.image.name === 'string') {
      imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
    } else {
      throw new Error("Invalid image object: Missing 'name' property.");
    }
  }

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from('cabins');

  // A) Create
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }

  // B) Edit
  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be created");
  }

  // Handle image upload
  if (!hasImagePath && newCabin.image) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    if (storageError) {
      await supabase.from('cabins').delete().eq('id', data.id);
      console.log(storageError);
      throw new Error("Cabin image could not be uploaded");
    }
  }

  return data;
}


export async function deleteCabin(id) {
  const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id); // Use the `id` parameter directly here

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
