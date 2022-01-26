import { Component } from "react";
import classes from "./MiniCartProduct.module.css";

class MiniCartProduct extends Component {
  render() {
    const attributes = this.props.product.attributes?.map((item, index) => {
      return (
        <div className={classes.attributes} key={index}>
          {item.items.map((lowerItem, index) => {
            return (
              <div
                className={
                  item.type !== "swatch"
                    ? item.selectedItem === index
                      ? classes.attributeSelected
                      : classes.attribute
                    : item.selectedItem === index
                    ? classes.swatchSelected
                    : classes.swatch
                }
                style={{ backgroundColor: lowerItem.displayValue }}
                key={lowerItem.id}
              >
                {item.type !== "swatch" && lowerItem.value}
              </div>
            );
          })}
        </div>
      );
    });

    return (
      <div className={classes.main}>
        <div className={classes.info}>
          <p>{this.props.product.brand}</p>
          <p>{this.props.product.name}</p>
          <p>
            <span>
              {
                this.props.product.prices[this.props.currencyIndex].currency
                  .symbol
              }
              {this.props.product.prices[
                this.props.currencyIndex
              ].amount.toLocaleString()}
            </span>
          </p>
          {attributes}
        </div>
        <div className={classes.wrapper}>
          <div className={classes.amount}>
            <button
              onClick={() =>
                this.props.modifyCartAmountHandler("add", this.props.index)
              }
            >
              +
            </button>
            <p>{this.props.product.amount}</p>
            <button
              onClick={() =>
                this.props.modifyCartAmountHandler("subtract", this.props.index)
              }
            >
              -
            </button>
          </div>
          <img
            className={classes.image}
            src={this.props.product.gallery[0]}
            alt="product"
          />
        </div>
      </div>
    );
  }
}

export default MiniCartProduct;
