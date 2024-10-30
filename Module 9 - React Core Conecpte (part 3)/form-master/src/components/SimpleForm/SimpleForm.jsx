const SimpleForm = () => {
  
  const handleSubmit = e => {
    //Aita auto reload khabena use korle
    e.preventDefault();


    //Ekta field set korba name ekta diba oita die access korba and oitar value ta pawar jnno .value diba
    console.log(e.target.name.value)
    console.log(e.target.email.value)
    console.log(e.target.phone.value)
    console.log("form submitted");
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"  name = "name"/>
        <br />
        <input type="email"  name = "email" id = ""/>
        <br />
        <input type="text"  name = "phone" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
