import Toggle from 'https://framer.com/m/Toggle-br49.js@uFJzvqKFm89IKGKnBh8I';
import {
  Switch,
  SwitchBackground,
  SwitchContainer,
  SwitchThumb,
} from '../components/SwitchDemo';

const toggleDemo = () => {
  return (
    <div style={{ margin: '80px' }}>
      <h1>Framer component</h1>

      <div style={{ margin: '40px 0' }}>
        <Toggle variant="On" />
      </div>
      <hr style={{ margin: '40px 0' }} />
      <h1>Code component</h1>

      <div style={{ margin: '40px 0' }}>
        {/* Usage 1 */}
        <Switch defaultChecked={true} />

        {/* Usage 2 */}
        <SwitchContainer defaultChecked={true}>
          <SwitchBackground />
          <SwitchThumb />
        </SwitchContainer>
      </div>
    </div>
  );
};

export default toggleDemo;
