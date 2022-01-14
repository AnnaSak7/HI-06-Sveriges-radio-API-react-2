import React, { useContext } from 'react';

import { ClickedProgramIdContext } from '../Main';

import MainBanner from './MainBanner';
import ProgramBanner from './ProgramBanner';
import ListenNowBanner from './ListenNowBanner';

import styles from '../styles/Banner.module.css';
const Banner = (props) => {
  const ProgramId = useContext(ClickedProgramIdContext);
  // const [clickedProgramId, setClickedProgramId] = useState(null);
  // const [receivedPData, setReceivedPData] = useState([]);

  // useEffect(() => {
  //   setClickedProgramId(props.clickedProgramId);
  //   setReceivedPData(props.programData);
  // }, [props.clickedProgramId, props.programData]);
  console.log('Banner is evaluated by React');
  let content = <p>Not Found</p>;

  switch (ProgramId) {
    case '4947':
      content = (
        <ProgramBanner
          name={props.programData[0].title}
          description={props.programData[0].description}
          programurl={props.programData[0].url}
          image={props.programData[0].img}
        />
      );
      break;

    case '4845':
      content = (
        <ProgramBanner
          name={props.programData[1].title}
          description={props.programData[1].description}
          programurl={props.programData[1].url}
          image={props.programData[1].img}
        />
      );
      break;
    case '5413':
      content = (
        <ProgramBanner
          name={props.programData[2].title}
          description={props.programData[2].description}
          programurl={props.programData[2].url}
          image={props.programData[2].img}
        />
      );
      break;
    case '5188':
      content = (
        <ProgramBanner
          name={props.programData[3].title}
          description={props.programData[3].description}
          programurl={props.programData[3].url}
          image={props.programData[3].img}
        />
      );
      break;
    default:
      content = <MainBanner />;
  }

  if (props.homeClicked) {
    console.log('home clicked..? ', props.homeClicked);
    content = <MainBanner />;
  }

  if (props.listenNowClicked) {
    content = <ListenNowBanner />;
  }
  return (
    <>
      <div className={styles.banner}>{content}</div>
      {/* <div className={styles.banner}></div> */}
    </>
  );
};

export default Banner;
