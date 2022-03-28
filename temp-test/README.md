# Faire remonter l'état !

---

Schema

App.js --> Calculator.js --> TemperatureInput.js \
"				"|--> BoilerVerdict.js

---

## Calculator.js : (Fichier Parent - state - attributions - functions)

Comprends les fonctions de conversion des valeurs de `temperature` et `scale`. \
Converti les celsius en fahrenheit et vis-versa.

```
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
```

Comprends les fonctions de conversion des valeurs de `temperature` et `scale`.

```
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
```

Défini les variables : `temperature` et `scale` en state dans le render ! \
Défini les variables : `celsius` et `fahrenheit` dans le render en les comparant aux entrées du fichier \
TemperatureInput.js.

```
  ...
  render() {
    const scale = this.state.scale;
    
    const temperature = this.state.temperature;

    const celsius = scale === 'f'
      ? tryConvert(temperature, toCelsius) : temperature;
    
    const fahrenheit = scale === 'c'
      ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c" <--- important !!!
          temperature={celsius} <--- important !
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f" <--- important !!!
          temperature={fahrenheit} <--- important
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
```

---

## TemperatureInput.js (input - props)

Fait remonter l'état de celsius et fahrenheit (scale) par comparaison avec les valeurs de scale du return de \
Calculator.js. 

```
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
```

Converti les state de `temperature` ou de `scale` en props (en fonction de l'input rempli) ! \
Input pour Celsius et Fahrenheit.

```
  ...
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
          <legend>Saisissez la temperature en {scaleNames[scale]} :</legend>
          <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```

## BoilerVerdict.js (Affichage si l'eau bout ou pas)

Défini si l'eau bou ou pas en fonction de `props.celsius`.

```
export default function BoilingVerdict(props) {
  if (props.celsius >= 100) {
      return <p>Water boils.</p>;
  }
  return <p>Water doesn't boil !</p>;
}
```