import React from "react";
import supabase from "./supabaseClients";
import { useNavigate } from "react-router-dom";

interface RegisterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUser: any;
}

const Register =(props : RegisterProps)=> {
  const {setUser} = props;
  const [newUser, setNewUser] = React.useState<boolean>(true);
  const navigate = useNavigate(); // Navigate to the homepage after login

  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      if (value === "" || value === null) return;
      data[key] = String(value);
    });

    const { email, password, username, confirmation } = data;

    if (password !== confirmation) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: username,
          },
        },
      });

      if (error) throw error;
      if (!data) throw new Error("No data returned");
    } catch (error) {
      alert(error);
    }

    e.currentTarget.reset();
    alert("Check your email for a confirmation link");
  };

  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      if (value === "" || value === null) return;
      data[key] = String(value);
    });

    const { email, password } = data;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) throw error;
      if (!data) throw new Error("No data returned");
      setUser(data);
      navigate("/homepage");
    } catch (error) {
      alert(`${error} or Something went wrong, please try again`);
    }
  };

  return (
    <div className="homepage">
      <div className="checkbox">
        <input
          value="private"
          name="change"
          id="change"
          type="checkbox"
          className="change"
          onClick={() => setNewUser(!newUser)}
        />
        <label htmlFor="change">
          <span className="change--text">Sign </span>
          <span className="change--toggletext">
            <span className="change--unchecked">
              <span className="change--hiddenlabel">Unchecked: </span>up
            </span>
            <span className="change--checked">
              <span className="change--hiddenlabel">Checked: </span>in
            </span>
          </span>
        </label>
      </div>

      {newUser ? (
        /* Sign Up Form */
        <div className="form-container">
          <div className="title-container" style={{ textAlign: "center" }}>
            Sign Up
          </div>
          <form className="form" id="sign-up" onSubmit={signUp}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required={true}
              />
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
                required={true}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                required={true}
              />
              <label htmlFor="confirmation">Confirm password</label>
              <input
                type="password"
                id="confirmation"
                name="confirmation"
                placeholder="password"
                required={true}
              />
            </div>
            <button className="form-submit-btn" type="submit" form="sign-up">
              Sign up
            </button>
          </form>
        </div>
      ) : (
        /* Login Form */
        <div className="form-container">
          <div className="title-container" style={{ textAlign: "center" }}>
            Login
          </div>
          <form className="form" id="sign-in" onSubmit={signIn}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required={true}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                required={true}
              />
            </div>
            <button className="form-submit-btn" type="submit" form="sign-in">
              Log in
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;












// import React from "react";
// import supabase from "./supabaseClients";
// import { useNavigate } from "react-router-dom";

// interface RegisterProps {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   setUser: any;
// }

// const Register = (props: RegisterProps) => {
//   const { setUser } = props;
//   const [newUser, setNewUser] = React.useState<boolean>(true);
//   const navigate = useNavigate(); // Navigate to the homepage after login

//   const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
//     // Sign up function and logic, connects to supabase to create account and checks for errors
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const data: { [key: string]: string } = {};
//     formData.forEach((value, key) => {
//       if (value === "" || value === null) return;
//       data[key] = String(value);
//     });

//     const { email, password, username, confirmation } = data;

//     if (password !== confirmation) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const { data, error } = await supabase.auth.signUp({
//         email: email,
//         password: password,
//         options: {
//           data: {
//             full_name: username,
//           },
//         },
//       });

//       if (error) throw error;
//       if (!data) throw new Error("No data returned");
//     } catch (error) {
//       alert(error);
//     }

//     e.currentTarget.reset();
//     alert("Check your email for a confirmation link");
//   };

//   const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
//     // Sign in function and logic, connects to supabase and checks for errors
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const data: { [key: string]: string } = {};
//     formData.forEach((value, key) => {
//       if (value === "" || value === null) return;
//       data[key] = String(value);
//     });

//     const { email, password } = data;

//     try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email: email,
//         password: password,
//       });

//       if (error) throw error;
//       if (!data) throw new Error("No data returned");
//       setUser(data);
//       navigate("/homepage");
//     } catch (error) {
//       alert(`${error} or Something went wrong, please try again`);
//     }
//   };

//   return (
//     <div className="homepage">
//       <div className="checkbox">
//         <input
//           value="private"
//           name="change"
//           id="change"
//           type="checkbox"
//           className="change"
//           onClick={() => setNewUser(!newUser)}
//         />
//         <label htmlFor="change">
//           <span className="change--text">Sign </span>
//           <span className="change--toggletext">
//             <span className="change--unchecked">
//               <span className="change--hiddenlabel">Unchecked: </span>up
//             </span>
//             <span className="change--checked">
//               <span className="change--hiddenlabel">Checked: </span>in
//             </span>
//           </span>
//         </label>
//       </div>

//       {newUser && (
//         /* Form Title and SignUp Form  */
//         <div className="form-container">
//           <div className="title-container" style={{ textAlign: "center" }}>
//             Sign Up
//           </div>

//           {/* SignUp button */}
//           <form className="form" id="sign-in" onSubmit={signUp}>
//             <div className="form-group">
//               {/* Email section */}
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="example@gmail.com"
//                 required={true}
//               />

//               {/* Username input */}
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 placeholder="username"
//                 required={true}
//               />

//               {/* Password input */}
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="password"
//                 required={true}
//               />

//               {/* Confirm Password input */}
//               <label htmlFor="confirmation">Confirm password</label>
//               <input
//                 type="password"
//                 id="confirmation"
//                 name="confirmation"
//                 placeholder="password"
//                 required={true}
//               />
//             </div>

//             {/* Submit button */}
//             <button className="form-submit-btn" type="submit" form="sign-in">
//               Sign up
//             </button>
//           </form>
//         </div>
//       )}

//       {!newUser && (
//         /*Login Title and Login Form */
//         <div className="form-container">
//           <div className="title-container" style={{ textAlign: "center" }}>
//             Login
//           </div>

//           <form className="form" id="sign-in" onSubmit={signIn}>
//             <div className="form-group">
//               {/* Email section  */}
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="example@gmail.com"
//                 required={true}
//               />

//               {/* password input */}
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="password"
//                 required={true}
//               />
//             </div>

//             {/* Submit button */}
//             <button className="form-submit-btn" type="submit" form="sign-in">
//               Log in
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Register;
