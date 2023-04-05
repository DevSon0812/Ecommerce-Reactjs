import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "./YupGlobal";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const schema = yup
  .object({
    firstName: yup.string().min(1).required(),
    lastName: yup.string().min(1).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(30).required(),
    chooseCb: yup.bool().oneOf([true], "Checkbox selection is required"),
  })
  .required();

export default function SignUp({ openModal, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // *handle open Modal

  const onSubmit = (data) => console.log(data);
  return (
    <section className="form">
      <div className={`form-overlay ${openModal ? "showModal-Form" : ""}`}>
        <div className="form-box">
          <div className="form-ic">
            <GrClose onClick={onClose} />
          </div>
          <div className="form-left">
            <h4 className="form-title">SonwKhan's</h4>
            <p className="form-content">
              JOIN OUR RED TAB™ PROGRAM AND GET FREE SHIPPING ON EVERY ORDER.
            </p>
            <p className="form-decription">
              Sign up for Levi’s® Red Tab™ to get exclusive access to products,
              events, and offers. Just provide a few details. It’s free to join
              and open to all.
            </p>
          </div>
          <form className="form-right" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-item">
              <label htmlFor="firstName">First Name*</label>
              <input id="firstName" {...register("firstName")} />
              <p className="form-error">{errors.firstName?.message}</p>
            </div>
            <div className="form-item">
              <label htmlFor="lastName">Last Name*</label>
              <input {...register("lastName")} />
              <p className="form-error">{errors.lastName?.message}</p>
            </div>
            <div className="form-item">
              <label htmlFor="email">Email*</label>
              <input {...register("email")} />
              <p className="form-error">{errors.email?.message}</p>
            </div>
            <div className="form-item">
              <label htmlFor="password">Password*</label>
              <input {...register("password")} type="password" />
              <p className="form-error">{errors.password?.message}</p>
            </div>
            <p className="form-password">
              Passwords must be at least 8 characters and can't be easy to guess
              - commonly used or risky passwords are not permitted.
            </p>
            <div className="form-checkbox">
              <input {...register("chooseCb")} type="checkbox" />

              <label htmlFor="checkbox">
                Send me news & offers from Levi's®.
              </label>
            </div>
            <p className="form-error">{errors.chooseCb?.message}</p>
            <div className="form-contact">
              By creating an account, I agree to the
              <a className="form-link">LS&Co. Terms of Use</a>
              and the Red Tab
              <a className="form-link">Member Program Terms and Conditions</a>.
              I have read the <a className="form-link">LS&Co. Privacy Policy</a>
              and
              <a className="form-link">
                Financial Incentive Notice and offer terms.
              </a>
            </div>
            <input className="form-submit" type="submit" value="Join" />
            <Link className="form-under">Log in with an existing account</Link>
          </form>
        </div>
      </div>
    </section>
  );
}
