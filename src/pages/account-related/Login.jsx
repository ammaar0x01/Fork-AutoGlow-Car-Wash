// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// // import "./Login.css"; 

// import image1 from '../../assets/images/cars/login/image-1.png';
// import image2 from '../../assets/images/cars/login/image-2.png';
// import image3 from '../../assets/images/cars/login/image-3.png';
// import interior from '../../assets/images/cars/login/interior.png';

// // import image1 from '../../assets/image-1.png';
// // import image2 from '../../assets/image-2.png';
// // import image3 from '../../assets/image-3.png';
// // import interior from '../../assets/interior.png';

// export default function Login() {
//   document.title = "Login"
  
//   const navigate = useNavigate();
//   const [login, setLogin] = useState({ email: "", password: "" });
//   const [showModal, setShowModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");
//   const [modalType, setModalType] = useState("success"); // 'success' or 'error'
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const images = [image1, image2, image3, interior];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLogin({ ...login, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:8080/mobileglow/Login/authenticate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           emailAddress: login.email,
//           password: login.password,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setModalMessage(data.message);
//         setModalType("success");
//         setShowModal(true);
//         localStorage.setItem("userEmail", login.email);
//         localStorage.setItem("userRoleDescription", data.role_description);
//         localStorage.setItem("authToken", data.token);
//         localStorage.setItem("userId", data.user_id || "1");

//         // Navigate after a short delay to show the modal
//         setTimeout(() => {
//           setShowModal(false);
//           if (data.role_description === "EMPLOYEE") {
//             navigate("/LandingEmployee");
//           } else {
//             navigate("/LandingCustomer");
//           }
//         }, 2000);
//       } else {
//         const error = await response.text();
//         try {
//           const errorData = JSON.parse(error);
//           setModalMessage(errorData.message);
//         } catch {
//           setModalMessage(error);
//         }
//         setModalType("error");
//         setShowModal(true);
//         // Auto-hide error modal after 3 seconds
//         setTimeout(() => setShowModal(false), 3000);
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       {/* Left Section */}
//       <div className="welcome-section">
//         <div className="logo">
//           <span style={{ fontWeight: 600 }}>Mobile</span> <span style={{ fontStyle: 'italic' }}>Car Wash</span>
//         </div>
//         <div className="welcome-text">
//           <h1>Hello, welcome!</h1>
//           <p>
//             Experience convenience at your fingertips. Login to schedule, manage, 
//             and track your car wash with ease.
//           </p>
//         </div>
//         <div className="illustration">
//           <div className="image-slider" style={{ overflow: 'hidden', width: '100%', height: '100%', position: 'relative', borderRadius: '15px' }}>
//             <div
//               className="slider-track"
//               style={{
//                 display: 'flex',
//                 width: `${images.length * 100}%`,
//                 height: '100%',
//                 transform: `translateX(-${currentImageIndex * (100 / images.length)}%)`,
//                 transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
//               }}
//             >
//               {images.map((image, index) => (
//                 <div key={index} style={{ width: `${100 / images.length}%`, height: '100%', position: 'relative', flexShrink: 0 }}>
//                   <img
//                     src={image}
//                     alt={`Car wash illustration ${index + 1}`}
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       objectFit: 'cover'
//                     }}
//                   />
//                   <div className="slide-overlay" style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                     background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                   }}>
//                     <div className="slide-content" style={{
//                       textAlign: 'center',
//                       color: 'white',
//                       padding: '20px',
//                       borderRadius: '10px',
//                       background: 'rgba(255,255,255,0.1)',
//                       backdropFilter: 'blur(10px)',
//                       border: '1px solid rgba(255,255,255,0.2)'
//                     }}>
//                       <h3 style={{ margin: '0 0 10px 0', fontSize: '24px', fontWeight: 'bold' }}>
//                         {index === 0 && 'Rim Detailing Excellence'}
//                         {index === 1 && 'Complete Exterior Bath'}
//                         {index === 2 && 'Thorough Wheel Care'}
//                         {index === 3 && 'Interior Perfection'}
//                       </h3>
//                       <p style={{ margin: 0, fontSize: '16px', opacity: 0.9 }}>
//                         {index === 0 && 'Precision cleaning for sparkling wheel rims'}
//                         {index === 1 && 'Luxurious exterior coverage for deep cleaning'}
//                         {index === 2 && 'Expert tire and rim restoration service'}
//                         {index === 3 && 'Immaculate interior polishing and care'}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Navigation Arrows */}
//             <button
//               onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
//               style={{
//                 position: 'absolute',
//                 left: '20px',
//                 top: '50%',
//                 transform: 'translateY(-50%)',
//                 background: 'rgba(255,255,255,0.2)',
//                 border: 'none',
//                 borderRadius: '50%',
//                 width: '50px',
//                 height: '50px',
//                 color: 'white',
//                 fontSize: '20px',
//                 cursor: 'pointer',
//                 backdropFilter: 'blur(10px)',
//                 transition: 'all 0.3s ease',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}
//               onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.4)'}
//               onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
//             >
//               ‹
//             </button>
//             <button
//               onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
//               style={{
//                 position: 'absolute',
//                 right: '20px',
//                 top: '50%',
//                 transform: 'translateY(-50%)',
//                 background: 'rgba(255,255,255,0.2)',
//                 border: 'none',
//                 borderRadius: '50%',
//                 width: '50px',
//                 height: '50px',
//                 color: 'white',
//                 fontSize: '20px',
//                 cursor: 'pointer',
//                 backdropFilter: 'blur(10px)',
//                 transition: 'all 0.3s ease',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}
//               onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.4)'}
//               onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
//             >
//               ›
//             </button>
//           </div>

//           {/* Enhanced Dots */}
//           <div className="dots-container" style={{
//             position: 'absolute',
//             bottom: '30px',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             display: 'flex',
//             gap: '15px',
//             background: 'rgba(0,0,0,0.3)',
//             padding: '10px 20px',
//             borderRadius: '25px',
//             backdropFilter: 'blur(10px)'
//           }}>
//             {images.map((_, index) => (
//               <span
//                 key={index}
//                 onClick={() => setCurrentImageIndex(index)}
//                 style={{
//                   width: currentImageIndex === index ? '16px' : '12px',
//                   height: currentImageIndex === index ? '16px' : '12px',
//                   borderRadius: '50%',
//                   backgroundColor: currentImageIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.5)',
//                   cursor: 'pointer',
//                   transition: 'all 0.3s ease',
//                   border: currentImageIndex === index ? '2px solid rgba(255,255,255,0.8)' : 'none',
//                   boxShadow: currentImageIndex === index ? '0 0 10px rgba(255,255,255,0.5)' : 'none'
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="login-section">
//         <form onSubmit={handleSubmit} className="login-form">
//           <h2>Log In</h2>
//           <p>Enter your account details to continue</p>

//           <div className="form-group">
//             <label>Email address</label>
//             <input
//               type="email"
//               name="email"
//               value={login.email}
//               onChange={handleChange}
//               placeholder="name@mail.com"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={login.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           <div className="form-options">
//             <label>
//               <input type="checkbox" /> Remember me
//             </label>
//             <a href="#">Forgot password?</a>
//           </div>

//           <div className="buttons">
//             <button type="submit" className="btn-login">
//               Login
//             </button>
//             <button type="button" className="btn-signup" onClick={() => navigate('/RoleSelection')}>
//               Sign Up
//             </button>
//           </div>

//           <div className="socials">
//             <span>Follow us:</span>
//             <div className="icons">
//               <a href="#"><i className="fab fa-facebook-f"></i></a>
//               <a href="#"><i className="fab fa-twitter"></i></a>
//               <a href="#"><i className="fab fa-instagram"></i></a>
//             </div>
//           </div>
//         </form>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className={`modal-content ${modalType}`}>
//             <p>{modalMessage}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };



// newer1 
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Assets
import image1 from '../../assets/images/cars/login/image-1.png';
import image2 from '../../assets/images/cars/login/image-2.png';
import image3 from '../../assets/images/cars/login/image-3.png';
import interior from '../../assets/images/cars/login/interior.png';

export default function Login() {
  document.title = "Login | MobileGlow";
  
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("success");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: image1, title: 'Rim Detailing', desc: 'Precision cleaning for sparkling rims' },
    { src: image2, title: 'Exterior Bath', desc: 'Luxurious deep cleaning coverage' },
    { src: image3, title: 'Wheel Care', desc: 'Expert tire and rim restoration' },
    { src: interior, title: 'Interior Perfection', desc: 'Immaculate polishing and care' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/mobileglow/Login/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailAddress: login.email,
          password: login.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setModalMessage(data.message || "Login Successful!");
        setModalType("success");
        setShowModal(true);
        localStorage.setItem("userEmail", login.email);
        localStorage.setItem("userRoleDescription", data.role_description);
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userId", data.user_id || "1");

        setTimeout(() => {
          setShowModal(false);
          navigate(data.role_description === "EMPLOYEE" ? "/employee" : "/customer");
        }, 1500);
      } else {
        setModalMessage(data.message || "Invalid credentials");
        setModalType("error");
        setShowModal(true);
        setTimeout(() => setShowModal(false), 3000);
      }
    } catch (error) {
      setModalMessage("Connection error. Is the server running?");
      setModalType("error");
      setShowModal(true);
    }
  };

  return (
    <div className="flex h-screen w-full bg-purple-500 overflow-hidden font-sans">
      
      {/* Left Section: Branding & Slider */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col p-12 justify-between overflow-hidden">
        {/* Background Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-950 to-black -z-10"></div>
        
        {/* Logo Area */}
        <div className="relative z-20 flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <span className="bg-white text-blue-900 px-3 py-1 rounded-lg font-black text-xl">M</span>
          <span className="text-white font-black tracking-tighter text-2xl uppercase">MobileGlow</span>
        </div>

        {/* Content & Slider Container */}
        <div className="relative z-20 space-y-8">
            <div className="space-y-4">
                <h1 className="text-5xl font-black text-white leading-tight">Hello, <br/>welcome back!</h1>
                <p className="text-blue-100/70 text-lg max-w-md">Experience convenience at your fingertips. Log in to manage your premium detailing schedule.</p>
            </div>

            {/* Slider */}
            <div className="relative h-80 w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <div 
                    className="flex h-full transition-transform duration-1000 ease-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {images.map((img, i) => (
                        <div key={i} className="min-w-full h-full relative">
                            <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-white text-2xl font-bold">{img.title}</h3>
                                <p className="text-white/80">{img.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dot Indicators */}
                <div className="absolute bottom-4 right-8 flex gap-2">
                    {images.map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-1.5 rounded-full transition-all duration-300 ${currentImageIndex === i ? 'w-8 bg-blue-500' : 'w-2 bg-white/30'}`}
                        />
                    ))}
                </div>
            </div>
        </div>

        {/* Footer Info */}
        <div className="relative z-20 text-blue-200/40 text-sm">
            © 2026 MobileGlow Detailing Services. Cape Town, SA.
        </div>
      </div>

      {/* Right Section: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white md:bg-gray-50/50">
        <div className="w-full max-w-md bg-white p-10 md:rounded-[2.5rem] md:shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:border md:border-gray-100">
          <div className="mb-10">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Log In</h2>
            <p className="text-gray-500 mt-2 font-medium">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
              <input
                type="email" name="email" value={login.email} onChange={handleChange}
                placeholder="name@mail.com" required
                className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-wider ml-1">Password</label>
              <input
                type="password" name="password" value={login.password} onChange={handleChange}
                placeholder="••••••••" required
                className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 font-bold hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-900 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-widest text-xs"
            >
              Login to Account
            </button>

            <button
              type="button"
              onClick={() => navigate('/role')}
              className="w-full bg-gray-100 text-gray-600 font-bold py-5 rounded-2xl transition-all hover:bg-gray-200 uppercase tracking-widest text-xs"
            >
              Create New Account
            </button>

                  <button
              type="button"
              onClick={() => navigate('/role')}
              className="w-full bg-gray-100 text-gray-600 font-bold py-5 rounded-2xl transition-all hover:bg-gray-200 uppercase tracking-widest text-xs"
            >
            Use without an account
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-10 pt-10 border-t border-gray-100 flex items-center justify-center gap-6">
             <span className="text-xs font-black text-gray-300 uppercase tracking-widest">Connect</span>
             <div className="flex gap-4">
                {['facebook-f', 'twitter', 'instagram'].map(icon => (
                    <a key={icon} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                        <i className={`fab fa-${icon}`}></i>
                    </a>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Success/Error Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 animate-fade-in">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className={`relative p-8 rounded-[2rem] shadow-2xl w-full max-w-xs text-center transform animate-pop-in ${
            modalType === 'success' ? 'bg-white text-gray-900' : 'bg-red-50 text-red-900 border border-red-100'
          }`}>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 ${
                modalType === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
            }`}>
              {modalType === 'success' ? '✓' : '✕'}
            </div>
            <p className="font-bold">{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}