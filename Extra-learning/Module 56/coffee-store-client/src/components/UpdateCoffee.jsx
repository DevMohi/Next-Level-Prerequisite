import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, photo , category, details, taste , supplier, quantity } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(updatedCoffee);
    //send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        form.reset();
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24 ">
      <h3 className="text-3xl font-extrabold">Update Coffee : {name}</h3>

      <form onSubmit={handleUpdateCoffee}>
        {/* form name and quantity row */}
        <div className="md:flex mb-4">
          <div className="md:w-1/2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  defaultValue={name}
                  name="name"
                  placeholder="Coffee Name"
                  className="input input-bordered w-full"
                />
              </div>
            </label>
          </div>

          <div className="md:w-1/2 lg:ml-4 ">
            <label className="form-control ">
              <div className="label">
                <span className="label-text">Available Quantity</span>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                />
              </div>
            </label>
          </div>
        </div>

        {/* Supplier and test form row */}
        <div className="md:flex mb-4">
          <div className="md:w-1/2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Supplier Name</span>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  defaultValue={supplier}
                  name="supplier"
                  placeholder="Supplier Name"
                  className="input input-bordered w-full"
                />
              </div>
            </label>
          </div>

          <div className="md:w-1/2 lg:ml-4 ">
            <label className="form-control ">
              <div className="label">
                <span className="label-text">Taste</span>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="taste"
                  placeholder="Taste"
                  className="input input-bordered w-full"
                />
              </div>
            </label>
          </div>
        </div>
        {/* Category and details form row */}
        <div className="md:flex mb-4">
          <div className="md:w-1/2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Categories</span>
              </div>

              <div className="input-group">
                <input
                  defaultValue={category}
                  type="text"
                  name="category"
                  placeholder="Categories"
                  className="input input-bordered w-full"
                />
              </div>
            </label>
          </div>

          <div className="md:w-1/2 lg:ml-4 ">
            <label className="form-control ">
              <div className="label">
                <span className="label-text">Details</span>
              </div>

              <div className="input-group">
                <input
                  defaultValue={details}
                  type="text"
                  name="details"
                  placeholder="Details"
                  className="input input-bordered w-full"
                />
              </div>
            </label>
          </div>
        </div>

        {/* Photo Url row */}
        <div className="mb-4">
          <div className="md:w-full ">
            <label className="form-control ">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>

              <div className="input-group">
                <input
                  defaultValue={photo}
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </div>
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Coffee"
          className="mt-4 btn btn-block"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
