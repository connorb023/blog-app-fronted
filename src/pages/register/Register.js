import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError(false);
      try {
        const res = await axios.post("/auth/register", {
          username,
          email,
          password,
        });
        res.data && window.location.replace("/login");
      } catch (err) {
        setError(true);
      }
    };