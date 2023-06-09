import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../YupGlobal";

const schema = yup
  .object({
    firstName: yup.string().min(1).required(),
    lastName: yup.string().min(1).required(),
    address: yup.string().required(),
    phone: yup.number().min(10).max(11).required(),
    chooseCb: yup.bool().oneOf([true], "Checkbox selection is required"),
  })
  .required();

const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <section className="order" style={{ marginBlock: 100 }}>
      <div className="order-wrapper">
        <div className="order-left">
          <h3 className="oder-title">SECURE CHECKOUT</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="oder-form">
            <h3 className="oder-form-title">Shipping Address</h3>
            <div className="oder-form-box">
              <div className="form-item">
                <label htmlFor="firstName">First Name*</label>
                <input id="firstName" {...register("firstName")} />
                <p className="form-error">{errors.firstName?.message}</p>
              </div>
              <div className="form-item">
                <label htmlFor="lastname">Last Name*</label>
                <input id="lastName" {...register("lastName")} />
                <p className="form-error">{errors.lastName?.message}</p>
              </div>
              <div className="form-item">
                <label htmlFor="address">Address*</label>
                <input id="address" {...register("address")} />
                <p className="form-error">{errors.address?.message}</p>
              </div>
              <div className="form-item">
                <label htmlFor="phone">Phone Number*</label>
                <input id="phone" {...register("phone")} />
                <p className="form-error">{errors.phone?.message}</p>
              </div>
            </div>
            <input className="form-submit" type="submit" value="Join" />
          </form>
        </div>
        <div className="order-right">
          <h3 className="oder-title">ORDER SUMMARY</h3>
        </div>
      </div>
    </section>
  );
};

export default Order;
