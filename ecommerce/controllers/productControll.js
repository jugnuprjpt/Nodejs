import productModal from "../modals/productModal.js";

///listing (get)////

export const productList = async (req, res) => {
  try {
    const productListing = await productModal.find();
    res.status(200).json({
      message: "Product Fetch Successfully",
      success: true,
      data: productListing,
    });
  } catch (error) {
    console.log(error, "error ");
    res.status(500).json({
      message: "error while fetching product",
      success: false,
      error: error,
    });
  }
};

///Create (post)////

export const createProduct = async (req, res) => {
  try {
    const { name, brand, location } = req.body;
    if (!name) {
      //   throw "name is required";
      return res.status(404).json({
        message: "Name is Required",
        success: false,
      });
    }
    if (!brand) {
      //   throw "name is required";
      return res.status(404).json({
        message: "brand is Required",
        success: false,
      });
    }
    if (!location) {
      //   throw "name is required";
      return res.status(404).json({
        message: "location is Required",
        success: false,
      });
    }
    const product = await productModal.create({ name, location, brand });
    res.status(201).json({
      message: "Product Create Successfully",
      success: true,
      data: product,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ error });
  }
};
