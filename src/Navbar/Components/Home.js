import * as React from 'react';
import { useNavigate} from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import { Button } from '@mui/material';
import "./Home.css";
function Home() {
    let navigate = useNavigate();
    return (
      <React.Fragment>
        <Tooltip title="Trang chủ" followCursor={true}>
          <Button
            onClick={() => navigate('/')}
            style={{ position: 'absolute', top: 10, left: 50 }}
            className='home'
          >
            UCC Food App
          </Button>
        </Tooltip>
      </React.Fragment>
    );
}
export default Home