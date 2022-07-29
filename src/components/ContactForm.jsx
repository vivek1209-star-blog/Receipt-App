import { useState } from "react";

export default function UserForm({addContact}) {

  const [contactInfo, setContactInfo] = useState({
    date: "",
    amount: "",
    payment: "",
    remark: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(contactInfo);
    setContactInfo({ date: "", amount: "", payment: "", remark: "" });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}> 
        <div>
          <h3>Receipt Form</h3>
        </div>
        <div>
          <label>Date : </label>
          <input
            type="date"
            name="date"
            placeholder="date"
            value={contactInfo.date}
            onChange={handleChange}
          />
        </div>
        <div>
        <label>Amount : </label>
          <input
            type="text"
            name="amount"
            placeholder="amount"
            value={contactInfo.amount}
            onChange={handleChange}

          />
        </div>
        <div>
        <label for="cars">Payment Mode :</label>

<select name="payment" id="payment" onChange={handleChange}>
  <option value="cash">cash</option>
  <option value="card">Debit/Credit Card</option>
  <option value="netbanking">Netbanking</option>
  <option value="upi">UPI</option>
</select>
        </div>
        <div>
        <label>Remark : </label>
          <input
            type="text"
            name="remark"
            placeholder="remark"
            value={contactInfo.remark}
            onChange={handleChange}

          />
        </div>
        <div>
          <button>Submit Contact</button>
        </div>
      </form>
    </div>
  );
}