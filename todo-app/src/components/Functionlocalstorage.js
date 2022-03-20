import React from 'react'

export default function App() {
  const [name, setName] = useState(['']);
  const [pwd, setPwd] = useState(['']);
  const [chk, setChk] = useState(false);

  function handleCheck() {
    setChk(!chk)
  }

  const handleRecord = (e) => {
    if (chk === true) {
      alert("Ok, wellcome")
      localStorage.setItem('checkbox', chk);
      localStorage.setItem('Name', name);
      localStorage.setItem('Password', pwd);
    } else {
      alert("You didn't sign terms !")
    }
    e.preventDefault();
  };

  const handleRemove = (e) => {
    localStorage.removeItem('checkbox');
    localStorage.removeItem('Name');
    localStorage.removeItem('Password');
    alert("Everything has been deleted")
    e.preventDefault();
  };
  return (
    <div className="App">
      <form className='sub--app' onSubmit={handleRecord}>
        <h2>Name of the user :</h2>
        <input
          type='text'
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={'input--class'}
        />
        <h2>Password of the user :</h2>
        <input
          type="password"
          placeholder="Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          className={'input--class'}
        />
        <label className='lbl--input'>
          <input
            type='checkbox'
            checked={chk}
            onChange={handleCheck}
          />
            Sign and Submit
        </label>
        <div>
          <button type='submit' value='Submit' className='btn--class'>Submit</button>
        </div>
        <div className='local--print'>
          <div className='sub--local'>
            {localStorage.getItem('Name') && (
              <div>
                Name : <i>{localStorage.getItem('Name')}</i>
              </div>
            )}
          </div>
          <div className='sub--local'>
            {localStorage.getItem('Password') && (
              <div>
                Password : <i>{localStorage.getItem('Password')}</i>
              </div>
            )}
          </div>
          <div className='sub--local'>
            {localStorage.getItem('checkbox') && (
              <div>
                Checker : <i>{localStorage.getItem('checkbox')}</i>
              </div>
            )}
          </div>
        </div>
        <div>
          <button onClick={handleRemove} className='btn--class'>Remove</button>
        </div>
     </form>
  </div>
  );
}