import React, { useEffect, useState } from "react";
import Navbar from "../components/navBar";
import Footer from "../components/Footer";
import SearchBar from "../components/searchBar";
import apiInstance from "../config/api/axios";
import { useNavigate } from "react-router-dom";
import showSwalMessage from "../config/helper/helper";

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [searchText , setSearchText] = useState('')
//   const navigate = useNavigate()

//   const getData = () => {
//     apiInstance.get("products")
//       .then((res) => {
//         console.log(res.data.data);
//         setProducts(res.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   const checkLogin = () => {
//     const token = localStorage.getItem("authToken");

//     if (token) {
//       showSwalMessage(
//         "Feature in Progress",
//         "We are working on this feature. It will be available soon!",
//         "info"
//       );
//     } else {
//       showSwalMessage("Error", "You need to log in first!", "error");
//       navigate("/login")
//     }
//   }
//   const search = (e) => {
//     setSearchText(e.target.value)
//     console.log(searchText)
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <SearchBar onchange={search} />
//       <div className="bg-gray-100 py-10 p-28">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden">
//               <h1 className="text-xl mt-3">{product.name}</h1>
//               <div className="p-4">
//                 <p className="text-gray-600 text-left">{product.description}</p>
//                 <p className="text-red-600 text-left">{product.price}</p>
//                 <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={checkLogin}>
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };
const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  // const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  // const getUserDetail = () => {
  //   apiInstance.get("")
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  const getData = () => {
    apiInstance.get("products")
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkLogin = () => {
    const token = localStorage.getItem("authToken");

    if (token) {
      showSwalMessage(
        "Feature in Progress",
        "We are working on this feature. It will be available soon!",
        "info"
      );
    } else {
      showSwalMessage("Error", "You need to log in first!", "error");
      navigate("/login");
    }
  };

  const search = (e) => {
    setSearchText(e.target.value);  // Update search text
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase()) ||
    product.description.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <SearchBar onchange={search} />
      <div className="bg-gray-100 py-10 p-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <h1 className="text-xl mt-3">{product.name}</h1>
              <div className="p-4">
                <p className="text-gray-600 text-left">{product.description}</p>
                <p className="text-red-600 text-left">{product.price}</p>
                <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={checkLogin}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {/* <button onClick={getUserDetail}>get data</button> */}
      </div>
      <Footer />
    </>
  );
};

export default Product;
