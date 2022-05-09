import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { random: "" };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const min = 1;
    const max = 9;
    let first_num = Math.floor(min + Math.random() * (max - min));
    let sec_num = Math.floor(min + Math.random() * (max - min));

    this.setState({
      random: "The key generated is: " + first_num + sec_num,
    });

    var word = this.state.value;
    const word_split = word.split("");

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alpha_split = alphabet.split("");

    var alphaUC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphaUC_split = alphaUC.split("");

    var vowel = "aeiou";
    const v_split = vowel.split("");

    var vowelUC = "AEIOU";
    const vUC_split = vowelUC.split("");

    var consonent = "bcdfghjklmnpqrstvwxyz";
    const c_split = consonent.split("");

    var consUC = "BCDFGHJKLMNPQRSTVWXYZ";
    const cUC_split = consUC.split("");

    var encrypted = "";

    word_split.forEach((e) => {
      if (e === " ") {
        encrypted += " ";
      } else {
        alpha_split.forEach((element, index) => {
          if (e === element) {
            v_split.forEach((el) => {
              if (e === el) {
                let num = index + first_num;
                if (num > 26) {
                  num = num - 26;
                }
                encrypted += alpha_split[num];
              }
            });

            c_split.forEach((ele) => {
              if (e === ele) {
                let num = index + sec_num;
                if (num > 26) {
                  num = num - 26;
                }
                encrypted += alpha_split[num];
              }
            });
          }
        });

        alphaUC_split.forEach((elementUC, indexUC) => {
          if (e === elementUC) {
            vUC_split.forEach((elUC) => {
              if (e === elUC) {
                let num = indexUC + first_num;
                if (num > 26) {
                  num = num - 26;
                }
                encrypted += alphaUC_split[num];
              }
            });

            cUC_split.forEach((eleUC) => {
              if (e === eleUC) {
                let num = indexUC + sec_num;
                if (num > 26) {
                  num = num - 26;
                }
                encrypted += alphaUC_split[num];
              }
            });
          }
        });
      }
    });
    this.setState({
      random2: "The encrypted word is: " + encrypted,
    });
    event.preventDefault();
  }

  // state = {  }
  render() {
    return (
      <div className="App">
        <header className="App-header p-5">
          <div className="row mb-5">
            <div className="col">
              <img
                src={require("../logo_najhan.png")}
                className="App-logo"
                alt="logo"
              />
              <img
                src={require("../inv.png")}
                className="App-logo-side"
                alt="logo_inv"
              />
            </div>
          </div>
          <h3>This is an encryption application.</h3>
          <h5>
            The key for encryption will be a two digit number randomly
            generated.
          </h5>
          <h5>
            The 1st digit of the key indicates the number of characters to move
            forward for vowel characters, while the 2nd digit for consonant.
          </h5>
          <h5 className="mb-4">
            Each submission has a unique random key generated.
          </h5>

          <p>Input:</p>

          <div class="row justify-content-center">
            <div class="col">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="title"
                  id="example"
                  class="form-control"
                  value={this.state.value}
                  onChange={this.handleChange}
                ></input>
                <button class="btn btn-warning" type="submit" value="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <h5>{this.state.random}</h5>
          <h5>{this.state.random2}</h5>
        </header>
      </div>
    );
  }
}

export default Main;
