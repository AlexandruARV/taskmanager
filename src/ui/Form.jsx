import { useForm } from "react-hook-form";

function Form() {
  // const { register, handleSubmit } = useForm();

  return (
    <form>
      <div>
        <label>Name</label>
        <input id="name" type="text"></input>
      </div>
    </form>
  );
}

export default Form;
