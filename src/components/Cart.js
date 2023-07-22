import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import { removeCart, removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(removeCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
    console.log(item);
  };

  let listPrice = 0;

  return !cartItems ? (
    <div>not add till now</div>
  ) : (
    <>
      <div className=" flex flex-col items-center ms-32">
        <div className=" text-4xl font-serif text-slate-800 font-semibold p-2 m-2">
          Cart Information
        </div>
        {cartItems.length === 0 && (
          <div className="  text-orange-400">
            <h1 className="text-4xl font-serif font-semibold p-2 m-2">
              Cart Is Empty!
            </h1>
            <p className="text-2xl text-slate-800 text-center">
              Go To Offers{" "}
              <Link to="/" className="text-blue-800 px-4 underline">
                Home
              </Link>{" "}
            </p>
          </div>
        )}

        <div className=" flex flex-row me-24">
          <span>
            {cartItems?.map((item) => {
              listPrice = listPrice + item.card.info.price / 100;
              return (
                <div
                  className=" bg-slate-600 flex justify-between drop-shadow-md shadow-md border m-6 p-2 px-2"
                  key={item.card.info.id + listPrice}
                >
                  <span className=" flex flex-col w-80 text-white">
                    <div className=" m-1 p-1 text-xl font-sans font-semibold">
                      {item.card.info.name}
                    </div>
                    <div className=" flex justify-between m-1 p-1">
                      <span className=" text-md text-left font-medium h-2 px-2">
                        Price per plate :₹{item.card.info.price / 100}
                      </span>
                      <button
                        className=" bg-blue-300 text-blue-600 shadow-blue-400 border-blue-500 rounded-lg border shadow-md font-mono px-2
                       hover:bg-red-400 hover:text-gray-900
                        hover:shadow-red-500 hover:border-red-600"
                        onClick={() => handleRemoveItem(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </span>
                  <img
                    className=" h-24 w-32 rounded-md"
                    src={
                      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                      item.card.info.imageId
                    }
                  />
                </div>
              );
            })}
            {cartItems.length > 0 && (
              <button
                className="px-3 py-2 my-8 bg-blue-400 rounded-lg text-black"
                onClick={removeCartItem}
              >
                Empty Cart
              </button>
            )}
          </span>
          <span className=" text-lg m-10 ms-32">
            <div className=" text-2xl font-semibold text-center p-4 ">
              Cart Billing
            </div>
            <table className=" table-auto border border-separate border-slate-500 ">
              <thead>
                <tr>
                  <th className="border  border-slate-500 p-2">
                    Name of Item{" "}
                  </th>
                  <th className="border  border-slate-500 p-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  return (
                    <tr key={item.card.info.id + listPrice}>
                      <td className=" border  border-slate-500 p-2 px-2 ">
                        {item.card.info.name}
                      </td>
                      <td className=" border  border-slate-500 p-2 text-right">
                        ₹ {item.card.info.price / 100}
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td className=" border  border-slate-500 p-2">
                    Total Amount
                  </td>
                  <td className=" border  border-slate-500 p-2 text-right">
                    ₹ {listPrice}
                  </td>
                </tr>
              </tbody>
            </table>
            <button className=" float-right mt-20 bg-blue-400 hover:bg-green-500 hover:shadow-lg hover:shadow-green-400 rounded-md p-1 ">
              {" "}
              Pay Now{" "}
            </button>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
