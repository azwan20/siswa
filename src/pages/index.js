import DataSiswa from "./dataSiswa";
import Form from "./form";
import Login from "./login";
import Navbar from "./navbar";
import { db } from "../../public/firebaseConfig";
import { getDocs, getDoc, collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

async function fetchDataLoginFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "login"));

  const data = [];

  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

export default function Home() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [dataLogin, SetDataLogin] = useState([]);
  const [passSekretaris, SetPassSekretaris] = useState("");
  const router = useRouter();

  console.log(dataLogin);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataLoginFromFirestore();
      SetDataLogin(data);
      SetPassSekretaris(data[0].password);
    }

    fetchData();
  }, []);


  const handleLogin = () => {
    if (emailInput === "admin@gmail.com" && passwordInput === passSekretaris) {
      alert("Login berhasil");
      router.push('/form');
    } else {
      alert("Email atau Password Salah!!!");
    }
  };
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="halLog">
          <div className="login d-flex">
            <h1>Login</h1>
            <section>
              <span>
                <p>email</p>
                <input type="email" onChange={(e) => setEmailInput(e.target.value)} />
              </span>
              <span>
                <p>password</p>
                <input type="password" onChange={(e) => setPasswordInput(e.target.value)} />
              </span>
            </section>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}
