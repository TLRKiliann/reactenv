import TimezonePicker from 'react-timezone';
 
export default () => (
  <TimezonePicker
    value="Asia/Yerevan"
    onChange={timezone => console.log('New Timezone Selected:', timezone)}
    inputProps={{
      placeholder: 'Select Timezone...',
      name: 'timezone',
    }}
  />
);