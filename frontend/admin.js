const form =
  document.getElementById("productForm");

form.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();

    const product = {
      name:
        document.getElementById("name").value,

      price:
        document.getElementById("price").value,

      image:
        document.getElementById("image").value,

      description:
        document.getElementById("description").value
    };

    const response =
      await fetch(
        "http://localhost:5000/api/admin/products",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify(product)
        }
      );

    const data =
      await response.json();

    alert(data.message);
  }
);


// img uploads

const imageFile =
  document.getElementById("image").files[0];

const formData = new FormData();

formData.append(
  "image",
  imageFile
);

const uploadResponse =
  await fetch(
    "http://localhost:5000/api/admin/upload",
    {
      method: "POST",
      body: formData
    }
  );

const uploadData =
  await uploadResponse.json();

const product = {
  name:
    document.getElementById("name").value,

  price:
    document.getElementById("price").value,

  description:
    document.getElementById("description").value,

  image:
    uploadData.imageUrl
};