import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { Modal } from "react-bootstrap";

const Favoritos = () => {
  const [objtFav, setObjfav] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const listitem = async () => {
    let arrayfav = [];

    const querySnapshot = await getDocs(collection(db, "favoritos"));
    console.log(querySnapshot);

    querySnapshot.forEach((doc) => {
      // console.log(doc.id);
      arrayfav.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    console.log(favoritos);
    setFavoritos(arrayfav);
  };

  useEffect(() => {
    listitem();
    console.log("jj", favoritos);
  }, []);

  const Editfav = async (id, data) => {
    const getitemfav = doc(db, "favoritos", id);
    await updateDoc(getitemfav, data);
  };
  
  const deletefav = (id) => {
    console.log("ggg", id);
    deleteDoc(doc(db, "favoritos", id));
    listitem();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(objtFav);
    Editfav(objtFav.id, objtFav);
    listitem();
  };


  const handleChange = (event) => {
    setObjfav({
      ...objtFav,
      [event.target.name]: event.target.value,
    });
  };



  return (
    <div>
      <table className="table text-center mt-3">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Nombre</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {favoritos.map((poke, id) => (
            <tr key={id}>
              {/* <td><img src={e.url} width="50" height="50" alt=""/></td> */}
              <td>{poke.altura}</td>
              <td>{poke.name}</td>
              <td>{poke.peso}</td>
              <td>
                <input
                  value="Delete"
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => {
                    deletefav(poke.id);
                  }}
                />
              </td>
              <td>
                <input
                  value="Edit"
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => {
                    handleShow();
                    setObjfav(poke);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="text"
              className="form-control mt-2"
              name="name"
              autoComplete="off"
              placeholder="nombre"
              value={objtFav.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              className="form-control mt-2"
              name="altura"
              autoComplete="off"
              placeholder="email"
              value={objtFav.altura}
              onChange={handleChange}
              required
            />

            <textarea
              className="form-control mt-2"
              autoComplete="off"
              name="peso"
              value={objtFav.peso}
              placeholder="peso"
              onChange={handleChange}
              required
            ></textarea>

            <div className="d-grid gap-2 mx-auto mt-2">
              <input
                value="Save"
                type="submit"
                className="btn btn-outline-dark"
              />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Favoritos;
