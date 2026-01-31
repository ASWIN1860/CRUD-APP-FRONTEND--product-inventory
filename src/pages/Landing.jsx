import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Badge,
  Container,
  Card,
  Row,
  Col,
  InputGroup,
  Form,
} from "react-bootstrap";
import { FaEdit, FaTrashAlt, FaPlus, FaSearch, FaBoxes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "./Landing.css";
import { getProductApi } from "../Service/allApi";
import { deleteProductApi } from "../Service/allApi";

const Landing = () => {
  const navigate = useNavigate()
  const [showData, setShowData] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  // const [deleteStatus,setDeleteStatus]=useState(null)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await getProductApi();
      console.log(res);
      if(res.status === 200){
        setShowData(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id)=>{
    try{
      const res= await deleteProductApi(id)
      if(res.status===200){
        getData()
        alert("Product Deleted Successfully")
      }
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className="inventory-page-wrapper">
      <div className="bg-blur-1"></div>
      <div className="bg-blur-2"></div>

      <Container className="py-5">
        <Row className="mb-4 align-items-center">
          <Col md={6}>
            <h2 className="fw-bold text-white d-flex align-items-center">
              <FaBoxes className="me-2 highlight-cyan" /> Product Inventory
            </h2>
            <p className="text-light opacity-75">
              Manage your stock levels and product details
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <Link
              to={"/addproducts"}
              className="btn btn-cyan shadow-lg px-4 py-2 fw-bold text-uppercase"
            >
              <FaPlus className="me-2" /> Add New Product
            </Link>
          </Col>
        </Row>

        <Card className="inventory-card">
          <Card.Header className="bg-transparent border-0 pt-4 px-4">
            <InputGroup className="search-group">
              <InputGroup.Text className="search-icon">
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search products..."
                className="search-input shadow-none"
                onChange={(e) => setSearchKey(e.target.value)}
              />
            </InputGroup>
          </Card.Header>

          <Card.Body className="p-0 mt-3">
            <Table responsive hover className="inventory-table mb-0">
              <thead>
                <tr>
                  <th className="ps-4">Product Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th className="text-end pe-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {showData && showData.length > 0 ? (
                  <>
                    {showData.filter(item => item.name.toLowerCase().includes(searchKey.toLowerCase())).map((item) => (
                      <tr key={item.id}>
                        <td className="ps-4 fw-medium text-dark">
                          {item.name}
                        </td>
                        <td>${item.price}</td>
                        <td>{item.stock}</td>
                        <td>
                          {
                            item.stock>0 ?
                            <>
                             <Badge bg="none" className="badge-stock-in">
                                Stock In
                             </Badge>
                            </>
                            :
                            <>
                            <Badge bg="none" className="badge-stock-out">
                                Stock Out
                            </Badge>
                            </>
                          }
                        </td>
                        <td className="text-end pe-4">
                          <Button
                            variant="none"
                            className="action-btn edit-btn me-2"
                            onClick={()=>{navigate('/editproducts',{state:{item}})}}
                          >
                           <FaEdit />
                          </Button>
                          <Button
                            variant="none"
                            className="action-btn delete-btn"
                            onClick={()=>handleDelete(item.id)}
                          >
                          <FaTrashAlt/>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <h2 className="text-center text-danger my-4">No Products Available !!!</h2>
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Landing;
