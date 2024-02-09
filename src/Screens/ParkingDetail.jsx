import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import image from ".././assets/parking5.webp";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const ParkingDetail = () => {
  const parking = {
    id: 1,
    name: "Rajiv Chowk Parking",
    area: "Connot Place, Delhi",
    dateOfCreation: "2023-01-15",
    price: "$12",
    guardName: "Arun Kashyap",
    landmark: "Near City Hall",
    capacity: "50",
  };
  const [isEditing, setIsEditing] = useState(false);
  const [editedParking, setEditedParking] = useState(parking);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Handle save action, for now, just log the editedParking
    console.log("Updated Parking Information:", editedParking);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedParking((prevParking) => ({
      ...prevParking,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto  px-16 py-8">
      {isEditing ? (
        <div
          className="bg-[#ffffff] shadow-xl border border-gray-300 rounded-sm w-full  duration-300 overflow-hidden p-12"
          style={{ height: "80vh" }}
        >
          <form>
            <div className="mb-8 grid grid-cols-3 gap-6">
              {/* <label htmlFor="name" className="block text-lg font-bold mb-2">
                Name:
              </label> */}
              <div className="py-3">
              <input
                type="text"
                id="name"
                name="name"
                value={editedParking.name}
                onChange={handleChange}
                className="w-full text-sm p-1 bg-slate-100  border border-b-1 border-gray-600 border-t-0 border-l-0 border-r-0 rounded-sm focus:outline-none focus:border-blue-500"
              />
              </div>
            
             <div className="py-3">  <input
                type="text"
                id="area"
                name="area"
                value={editedParking.area}
                onChange={handleChange}
                className="w-full text-sm p-1 bg-slate-100  border border-b-1 border-gray-600 border-t-0 border-l-0 border-r-0 rounded-sm focus:outline-none focus:border-blue-500"
              />
             </div>
             <div className="py-3">
            <input
                type="text"
                id="name"
                name="name"
                value={editedParking.name}
                onChange={handleChange}
                className="w-full text-sm p-1 bg-slate-100  border border-b-1 border-gray-600 border-t-0 border-l-0 border-r-0 rounded-sm focus:outline-none focus:border-blue-500"
              />
              
            </div>
           <div className="py-3">
         
              <input
                type="text"
                id="name"
                name="name"
                value={editedParking.name}
                onChange={handleChange}
                className="w-full text-sm p-1 bg-slate-100  border border-b-1 border-gray-600 border-t-0 border-l-0 border-r-0 rounded-sm focus:outline-none focus:border-blue-500"
              />
           </div>
              
              <div className="py-3">
             <input
                type="text"
                id="name"
                name="name"
                value={editedParking.name}
                onChange={handleChange}
                className="w-full text-sm p-1 bg-slate-100  border border-b-1 border-gray-600 border-t-0 border-l-0 border-r-0 rounded-sm focus:outline-none focus:border-blue-500"
              />
             </div>
            </div>
            {/* Add other fields similarly */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleSave}
                className="bg-blue-500 text-white py- px-2 rounded-sm mx-2 hover:bg-blue-600 focus:outline-none"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 text-gray-700 py-1 px-2 rounded-sm hover:bg-red-600 focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex justify-between">
          <div
            className=" flex    overflow-hidden py-12"
            style={{ height: "80vh" }}
          >
            <div>
              <h1 className="  text-2xl font-bold mb-2">{parking.name}</h1>
              <h1 className="  text-xl font-normal mb-8">{parking.area}</h1>

              <p className="py-4 px-6 text-sm">
                <span className="  py-4 text-sm font-bold">Price:</span>{" "}
                {parking.price}
              </p>

              <p className="py-4 px-6 text-sm">
                <span className="  py-4 text-sm font-bold">Landmark:</span>{" "}
                {parking.landmark}
              </p>

              <p className="py-4 px-6 text-sm">
                <span className="  py-4 text-sm font-bold">Reg. date:</span>{" "}
                {parking.dateOfCreation}
              </p>

              <p className="py-4 px-6 text-sm">
                <span className="  py-4 text-sm font-bold">Gaurd:</span>{" "}
                {parking.guardName}
              </p>
              <p className="py-4 px-6 text-sm">
                <span className="  py-4 text-sm font-bold">Capacity:</span>{" "}
                {parking.capacity}
              </p>
            </div>
            {/* Display other details similarly */}

            <div>
              <button
                onClick={handleEdit}
                className="text-2xl font-normal text-gray-600 mt-2 px-16"
              >
                <MdEdit />
              </button>
              <button
                onClick={handleEdit}
                className="text-2xl font-normal text-gray-600 mt-2 px-16"
              >
                <MdOutlineAddPhotoAlternate />
              </button>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center p-4 ">
              <button>
                <h1 className="pr-2">
                  <MdKeyboardArrowLeft />
                </h1>
              </button>

              <img src={image} className="w-72 h-96" alt="" />
              <button>
                <h1 className="pl-2">
                  <MdKeyboardArrowRight />
                </h1>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParkingDetail;
