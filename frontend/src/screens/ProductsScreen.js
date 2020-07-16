import {
  React,
  useState,
  useDispatch,
  useSelector,
  useEffect,
} from "libraries";
import {
  saveProduct,
  listProduct,
  deleteProduct,
} from "modules/redux/actions/productActions";

const ProductsScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;
  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProduct());
    return () => {};
  }, [successSave, successDelete]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setPrice(product.price);
    setImage(product.image);
    setBrand(product.brand);
    setCategory(product.category);
    setCountInStock(product.countInStock);
    setDescription(product.description);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        _id: id,
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,
      })
    );
  };

  const deleteHandler = (product) => {
    dispatch(deleteProduct(product._id));
  };

  return (
    <div className="content content-margined">
      <div className="product-header">
        <h3>Products</h3>
        <button
          className="button__add button__add--primary"
          onClick={() => openModal({})}
        >
          Create Product
        </button>
      </div>
      {modalVisible && (
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form__container">
              <li>
                <h2>Add New Product</h2>
              </li>
              <li>
                {loadingSave && <div>loading...</div>}
                {errorSave && <div> {errorSave} </div>}
              </li>

              <li>
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name ? name : ""}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="enter a name"
                />
              </li>
              <li>
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price ? price : ""}
                  placeholder="enter a price"
                />
              </li>
              <li>
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  onChange={(e) => setImage(e.target.value)}
                  value={image ? image : ""}
                  placeholder="enter a image"
                />
              </li>
              <li>
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  onChange={(e) => setBrand(e.target.value)}
                  value={brand ? brand : ""}
                  placeholder="enter a brand"
                />
              </li>
              <li>
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category ? category : ""}
                  placeholder="enter a category"
                />
              </li>
              <li>
                <label htmlFor="countInStock">countInStock</label>
                <input
                  type="text"
                  name="countInStock"
                  id="countInStock"
                  onChange={(e) => setCountInStock(e.target.value)}
                  value={countInStock ? countInStock : ""}
                  placeholder="enter a countInStock"
                />
              </li>
              <li>
                <label htmlFor="description">description</label>
                <textarea
                  name="description"
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description ? description : ""}
                  placeholder="enter a description"
                ></textarea>
              </li>
              <li>
                <button
                  type="submit"
                  className="button__add button__add--primary"
                >
                  {id ? "Update" : "Create"}
                </button>
                <button
                  type="button"
                  className="button__add button__add--primary"
                  onClick={() => setModalVisible(false)}
                >
                  Close
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}

      <div className="product-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <button
                    className="button__add"
                    onClick={() => openModal(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="button__add"
                    onClick={() => deleteHandler(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsScreen;
