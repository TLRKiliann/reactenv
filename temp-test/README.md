# Faire remonter l'état !

---

Schema

App.js \
&ensp; &darr; \
Calculator.js &harr; TemperatureInput.js \
&ensp; &darr; \
BoilerVerdict.js

---

## Calculator.js : (Fichier Parent - state)

Comprends les fonctions de conversion des valeurs de **temperature** et **scale**. \
Converti les celsius en fahrenheit et vis-versa.

```
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
```

Comprends les fonctions de conversion des valeurs de **temperature** et **scale**.

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

**Remontée de l'état** : **temperature** et **scale** depuis TemperatureInput.js! \
sans pouvoir les modifier.

Défini les variables : **celsius** et **fahrenheit** dans le render en les comparant aux entrées du fichier \
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
          scale="c" &larr; important !!!
          temperature={celsius} &larr; important !
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f" &larr; important !!!
          temperature={fahrenheit} &larr; important
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
```

---

## TemperatureInput.js (props)

Fait remonter l'état de celsius et fahrenheit (scale) pour ensuite les comparer avec les valeurs de scale du return de \
Calculator.js. 

```
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
```

Converti les state de **temperature** ou de **scale** en props (par rapport l'input rempli) ! \
(On ajoute une prop scale qui pourra être soit **"c"**, soit **"f"** : avec input pour Celsius et Fahrenheit).

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

## BoilerVerdict.js (props)

Défini si l'eau bou ou pas en fonction de **props.celsius**.

```
export default function BoilingVerdict(props) {
  if (props.celsius >= 100) {
      return <p>Water boils.</p>;
  }
  return <p>Water doesn't boil !</p>;
}
```