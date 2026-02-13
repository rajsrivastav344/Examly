import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Registration = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    college: '',
    course: '',
    branch: '',
    session: '',
    phone: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/examinee', form)
      alert("Registered successfully")
      window.location.href = '/'
    } catch (er) {
      console.log(er)
      alert("Sorry, try again later")
    }
  }

  const [data, setData] = useState([])
  const handlefetch = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/session');
      setData(res.data)
    } catch (er) {
      console.log(er)
    }
  }

  useEffect(() => {
    handlefetch();
  }, [])

  return (
    <div>
      <style>
        {`
          .register-container {
            min-height: 100vh;
        background: linear-gradient(to right, #fcb322ff, #f65920ff);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
          }
          .register-card {
            background: #f6d6d6ff;
            border-radius: 15px;
            box-shadow: 0px 8px 30px rgba(0,0,0,0.15);
            padding: 40px;
            max-width: 600px;
            width: 100%;
            animation: fadeIn 1s ease-in-out;
          }
          .register-card h2 {
            text-align: center;
            margin-bottom: 30px;
            font-weight: bold;
            color: #333;
          }
          .form-control, .form-select {
            border-radius: 10px;
            padding: 12px;
            font-size: 16px;
            border: 1px solid #ddd;
            transition: all 0.3s;
          }
          .form-control:focus, .form-select:focus {
            border-color: #4f46e5;
            box-shadow: 0 0 8px rgba(79,70,229,0.3);
          }
          .btn-primary {
            background:  #ed268dff;
            border: none;
            padding: 12px;
            font-size: 18px;
            border-radius: 10px;
            transition: all 0.3s;
            width: 100%;
          }
          .btn-primary:hover {
            background: #3730a3;
            transform: scale(1.05);
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div className="register-container">
        <div className="register-card">
          <h2>Student Registration</h2>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="text" placeholder="Enter Name"
                name="name" className="form-control" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input type="email" placeholder="Enter Email"
                name="email" className="form-control" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input type="password" placeholder="Enter Password"
                name="password" className="form-control" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input type="text" placeholder="Enter College Name"
                name="college" className="form-control" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input type="text" placeholder="Enter Course Name"
                name="course" className="form-control" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input type="text" placeholder="Enter Branch Name"
                name="branch" className="form-control" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <select name="session" onChange={handleChange} className="form-select" required>
                <option value="">Select Session</option>
                {data.map((item) => (
                  <option key={item._id} value={item._id}>{item.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <input type="text" placeholder="Enter Phone Number"
                name="phone" className="form-control" onChange={handleChange} required />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration
