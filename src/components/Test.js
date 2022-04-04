
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Test.css';



class Test extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      fullName: ""
    };
    this.state = {
      nombreR: "0"
    };
    this.state = {
      rue: ""
    };
    this.state = {
      numM: "0"
    };
    this.state = {
      numb: "0"
    };
    this.state = {
      code: "0"
    };
    this.state = {
      commune: ""
    };
  }
  handleSubmitForm(event) {
    if (window.confirm(("Nom : " + this.state.fullName + "\rNombre de Repas : " + this.state.nombreR
      + "\rRue : " + this.state.rue + "\rNuméro de maison : " + this.state.numM
      + "\rNuméro de boite : " + this.state.numb + "\rCode postal : " + this.state.code +
      "\rCommune : " + this.state.commune))) {

      window.open("exit.html", "Thanks for Visiting!");
    }

event.preventDefault();
  }
  handleChange(event) {
    var value = event.target.value;
    this.setState({
      fullName: value
    });


  }

  handleChange2(event) {
    var value = event.target.value;
    this.setState({
      nombreR: value
    });

  }

  handleChange3(event) {
    var value = event.target.value;
    this.setState({
      rue: value
    });

  }
  handleChange4(event) {
    var value = event.target.value;
    this.setState({
      numM: value
    });

  }

  handleChange5(event) {
    var value = event.target.value;
    this.setState({
      numb: value
    });

  }

  handleChange6(event) {
    var value = event.target.value;
    this.setState({
      code: value
    });

  }

  handleChange7(event) {
    var value = event.target.value;
    this.setState({
      commune: value
    });

  }


  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('user', JSON.stringify(nextState));
  }


  render() {
    return (
      <div className='formulaire'>
        <center>

          <form name='test2' onSubmit={event => this.handleSubmitForm(event)} >
            <fieldset>

              <label>
                Nom* :
                <input
                  type="text"
                  value={this.state.fullName || ""} required
                  onChange={event => this.handleChange(event)}
                />
              </label>

              <label>
                Nombre de Repas:
                <input
                  type="number"
                  value={this.state.nombreR || ""} min={1} max={20}
                  onChange={event => this.handleChange2(event)}
                />
              </label>
              <label>
                Rue*:
                <input
                  type="text"
                  value={this.state.rue || ""} required
                  onChange={event => this.handleChange3(event)}
                />
              </label>
              <label>
                Numéro de maison:
                <input
                  type="number"
                  value={this.state.numM || ""}
                  onChange={event => this.handleChange4(event)}
                />
              </label>
              <label>
                Numéro de boite:
                <input
                  type="number"
                  value={this.state.numb || ""}
                  onChange={event => this.handleChange5(event)}
                />
              </label>
              <label>
                Code:
                <input
                  type="number"
                  value={this.state.code || ""} min={1000} max={9999}
                  onChange={event => this.handleChange6(event)}
                />
              </label>
              <label>
                Commune:
                <input
                  type="text"
                  value={this.state.commune || ""}
                  onChange={event => this.handleChange7(event)}
                />
              </label>
  
              <p>    <input type="submit"    value="Envoyer" />
                <NavLink to={'/'}>     <input type="submit" value="Ajouter des articles " /> </NavLink> </p>
            </fieldset>
          </form>
        </center>
      </div>
    );

  }

}

export default Test 
