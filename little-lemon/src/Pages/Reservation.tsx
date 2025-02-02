import { reservationContent } from './_PageData';

const Reservation = () => {
  return (
    <div>
      <h1>{reservationContent.title}</h1>
      <div>
        <div>
          <div className="res-type-container">
            <div>
              {reservationContent.labelOne}
              <input type="radio" />
            </div>
          </div>
          <br />
          <form action="">
            <label htmlFor="">Date</label> <br />
            <input type="text" /> <br /> <br />
            <label htmlFor="">Occasion</label> <br />
            <input type="text" /> <br /> <br />
          </form>
        </div>
        <div>
          <div className="res-type-container">
            <div>
              {reservationContent.labelTwo}
              <input type="radio" /> <br /> <br />
            </div>
          </div>
          <form action="">
            <label htmlFor="">No. of Diners</label> <br />
            <input type="text" /> <br /> <br />
            <label htmlFor="">Select time</label> <br />
            <input type="text" /> <br /> <br />
          </form>
        </div>
      </div>
      <div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div>
          <button>Reserve a Table</button>
        </div>
      </div>
      <br /> <br />
      {/* Second */}
      <div>
        <div>
          <form action="">
            <label htmlFor="">First Name</label> <br />
            <input type="text" name="" id="" /> <br />
            <label htmlFor="">Email</label> <br />
            <input type="text" name="" id="" />
            {/* Choices */}
            <div>
              <input type="radio" />
              You agree to our friendly privacy policy
            </div>
          </form>
        </div>
        <div>
          <form action="">
            <label htmlFor="">Last Name</label> <br />
            <input type="text" name="" id="" /> <br />
            <label htmlFor="">Phone Number</label> <br />
            <input type="text" name="" id="" /> <br />
            <label htmlFor="">Special Request</label> <br />
            <textarea name="comment" rows={10} cols={30} id=""></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
