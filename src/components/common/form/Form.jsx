import { useEffect } from "react";
import Input from "../Input";


//! NOT work
export default function Form({ typeform, typeTable }) {
  useEffect(
    () => {
      if (typeform == "post" || typeTable == "employee") {
        console.log(typeform);
        console.log(typeTable);
        return (
          <>
            Form
            <form>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
              <Input
                inputType="text"
                placeholder="Usuario"
                value="userEmployee"
              />
              <Input
                inputType="text"
                placeholder="type employee"
                value="typeEmployee"
              />

              <button type="submit">Submit</button>
            </form>
          </>
        );
      } else {
        console.log("fallo");
      }
      // return (
      // <>
      //   Form
      //   <form>
      //     <label htmlFor="email">Email</label>
      //     <input type="email" name="email" id="email" />
      //     <label htmlFor="password">Password</label>
      //     <input type="password" name="password" id="password" />
      //     <Input inputType="text" placeholder="Usuario" value="userEmployee" />
      //     <Input inputType="text" placeholder="type employee" value="typeEmployee" />

      //     <button type="submit">Submit</button>

      //   </form>
      // </>

      //   );
    },
    []

    // if (typeform=='post' ||typeTable == 'employee' ){
    //   console.log(typeform);
    //   console.log(typeTable);
    //   return (
    //     <>
    //       Form
    //       <form>
    //         <label htmlFor="email">Email</label>
    //         <input type="email" name="email" id="email" />
    //         <label htmlFor="password">Password</label>
    //         <input type="password" name="password" id="password" />
    //         <Input inputType="text" placeholder="Usuario" value="userEmployee" />
    //         <Input inputType="text" placeholder="type employee" value="typeEmployee" />

    //         <button type="submit">Submit</button>

    //       </form>
    //     </>)
    // }else{
    //   console.log("fallo")}
    // return (
    // <>
    //   Form
    //   <form>
    //     <label htmlFor="email">Email</label>
    //     <input type="email" name="email" id="email" />
    //     <label htmlFor="password">Password</label>
    //     <input type="password" name="password" id="password" />
    //     <Input inputType="text" placeholder="Usuario" value="userEmployee" />
    //     <Input inputType="text" placeholder="type employee" value="typeEmployee" />

    //     <button type="submit">Submit</button>

    //   </form>
    // </>

    //   );
    // })
  );
}
