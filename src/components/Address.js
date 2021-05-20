import { useEffect, useState } from "react";

function Address() {
  var [formerrors, setFormerrors] = useState({});

  var validate = function (elements) {
    var errors = {};

    var pattern = new RegExp(/^[0-9\b]+$/);

    if (!elements.name.value) {
      errors.name = "Name is Required";
    }
    if (!elements.phone.value) {
      errors.phone = "Phone is Required";
    }
    if (!pattern.test(elements.phone.value)) {
      errors.phone = "Please Enter Valid Phone";
    }
    if (!elements.address.value) {
      errors.address = "Address is Required";
    }
    if (!elements.city.value) {
      errors.city = "City is Required";
    }
    if (!elements.zip.value) {
      errors.zip = "Zip is Required";
    }
    var errorkeys = Object.keys(errors);
    if (errorkeys.length > 0) return errors;
    else return false;
  };

  var placeOrder = function () {
    var form = document.getElementById("addressform");
    console.log("form element in this", form.elements, form.controls);
    var errors = validate(form.elements);
    if (errors) {
      setFormerrors(errors);
    } else {
      setFormerrors({});
      alert("Form Validate successfully");
    }
  };
  return (
    <div>
      <h1> Shipping Address</h1>
      <form id="addressform">
        <div class="form-group">
          <label for="inputAddress">Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            id="inputAddress"
          />
        </div>
        {formerrors?.name && (
          <div className="formerrors">{formerrors.name}</div>
        )}
        <div class="form-group">
          <label for="inputEmail4">Phone</label>
          <input
            type="number"
            name="phone"
            class="form-control"
            id="inputPhone"
          />
        </div>
        {formerrors?.phone && (
          <div className="formerrors">{formerrors.phone}</div>
        )}
        <div class="form-group">
          <label for="inputAddress2">Address </label>
          <input
            type="text"
            name="address"
            class="form-control"
            id="inputAddress"
          />
        </div>
        {formerrors?.address && (
          <div className="formerrors">{formerrors.address}</div>
        )}
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input
              type="text"
              name="city"
              class="form-control"
              id="inputCity"
            />
            {formerrors?.city && (
              <div className="formerrors">{formerrors.city}</div>
            )}
          </div>

          <div class="form-group col-md-6">
            <label for="inputZip">Zip</label>
            <input type="text" name="zip" class="form-control" id="inputZip" />
            {formerrors?.zip && (
              <div className="formerrors">{formerrors.zip}</div>
            )}
          </div>
        </div>
      </form>
      <button onClick={placeOrder} class="btn btn-primary">
        Place Order
      </button>
    </div>
  );
}
export default Address;
