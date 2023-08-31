import bg from '../../assets/gl_bg.jpg';
import Block from '../../component/Block';
import han_avatar from '../../assets/avatar.jpg';
import angular_icon from '../../assets/angular_icon.png';
import react_icon from '../../assets/react_icon.png';
import rn_icon from '../../assets/rn_icon.png';
import css_icon from '../../assets/css_icon.png';
import html_icon from '../../assets/html_icon.png';
import js_icon from '../../assets/js_icon.png';
import ts_icon from '../../assets/ts_icon.png';
import gcp_icon from '../../assets/gcp_icon.png';
import git_icon from '../../assets/git_icon.png';
import ga_icon from '../../assets/ga_icon.png';
import python_icon from '../../assets/python_icon.png';
import sap_icon from '../../assets/sap_icon.png';
import ig_icon from '../../assets/ig_icon.png';
import fb_icon from '../../assets/fb_icon.png';
import mail_icon from '../../assets/mail_icon.png';

export default function Home() {
  const handleMailClick = () => {
    window.location.href = `mailto:han@webglsoft.com`;
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',
        backgroundColor: '#F3EFEE',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          justifyItems: 'center',
          alignItems: 'center',
          maxWidth: '1280px',
          width: '100%',
          backgroundColor: '#ffffff',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              position: 'relative',
              marginBottom: '100px',
              alignItems: 'center',
            }}
          >
            <img src={bg} style={{ width: '720px' }}></img>
            <div
              style={{
                borderRadius: '200px',
                maxWidth: '200px',
                maxHeight: '200px',
                width: '100%',
                height: '100%',
                position: 'absolute',
                bottom: '-100px',
                left: '50px',
                border: '1px solid #000',
              }}
            >
              <img
                src={han_avatar}
                style={{
                  borderRadius: '200px',
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                }}
                alt=""
              ></img>
            </div>

            <div
              style={{
                width: '100%',
                height: '10px',
                background:
                  'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)',
              }}
            ></div>
          </div>

          <div style={{ paddingLeft: '60px', paddingRight: '60px' }}>
            <div style={{ marginTop: '30px' }}>
              <Block index={1}>
                <div style={{ margin: '30px 0 30px 0' }}>
                  <h1 style={{ margin: '10px 0 10px 0' }}>About</h1>
                  <p>喜歡嘗試各種新技術與吸收新知識</p>
                </div>
              </Block>
            </div>
            <div style={{ marginTop: '30px' }}>
              <Block index={2}>
                <div style={{ margin: '30px 0 30px 0' }}>
                  <h1 style={{ margin: '10px 0 10px 0' }}>EDUCATION</h1>
                  <p style={{ margin: '5px 0 5px 0' }}>
                    國立高雄科技大學(原 國立高雄應用科技大學)
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      智慧商務系(原 資訊管理系)四技畢業　{' '}
                    </p>
                    <p
                      style={{ fontSize: '14px', margin: 0, color: '#7e7e7e' }}
                    >
                      (2018/9~2022/6)
                    </p>
                  </div>
                </div>
              </Block>
            </div>
            <div style={{ marginTop: '30px' }}>
              <Block index={3}>
                <h1>SKILLS</h1>
                <div
                  style={{
                    margin: '30px 0 30px 0',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyItems: 'center',
                      marginRight: '30px',
                    }}
                  >
                    <img
                      src={angular_icon}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                      }}
                      alt=""
                    ></img>
                    <p>Angular</p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyItems: 'center',
                      marginRight: '30px',
                    }}
                  >
                    <img
                      src={react_icon}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                      }}
                      alt=""
                    ></img>
                    <p>React</p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyItems: 'center',
                      marginRight: '30px',
                    }}
                  >
                    <img
                      src={rn_icon}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                      }}
                      alt=""
                    ></img>
                    <p>React Native</p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyItems: 'center',
                      marginRight: '30px',
                    }}
                  >
                    <img
                      src={js_icon}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                      }}
                      alt=""
                    ></img>
                    <p>Javascript</p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyItems: 'center',
                      marginRight: '30px',
                    }}
                  >
                    <img
                      src={ts_icon}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                      }}
                      alt=""
                    ></img>
                    <p>Typescript</p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyItems: 'center',
                      marginRight: '30px',
                    }}
                  >
                    <img
                      src={html_icon}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                      }}
                      alt=""
                    ></img>
                    <p>HTML</p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyItems: 'center',
                      marginRight: '30px',
                    }}
                  >
                    <img
                      src={css_icon}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                      }}
                      alt=""
                    ></img>
                    <p>CSS</p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyItems: 'center',
                      marginRight: '30px',
                    }}
                  >
                    <img
                      src={git_icon}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                      }}
                      alt=""
                    ></img>
                    <p>git</p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyItems: 'center',
                      marginRight: '30px',
                    }}
                  >
                    <img
                      src={python_icon}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                      }}
                      alt=""
                    ></img>
                    <p>Python</p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyItems: 'center',
                      marginRight: '30px',
                    }}
                  >
                    <img
                      src={sap_icon}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                      }}
                      alt=""
                    ></img>
                    <p>SAP</p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyItems: 'center',
                      marginRight: '30px',
                    }}
                  >
                    <img
                      src={ga_icon}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                      }}
                      alt=""
                    ></img>
                    <p>Google Analytics</p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyItems: 'center',
                      marginRight: '30px',
                    }}
                  >
                    <img
                      src={gcp_icon}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                      }}
                      alt=""
                    ></img>
                    <p>GCP</p>
                  </div>
                </div>
              </Block>
            </div>
            <div style={{ marginTop: '30px' }}>
              <Block index={4}>
                <div style={{ margin: '30px 0 30px 0' }}>
                  <h1>PROJECT EXPERIENCE</h1>
                  <p
                    style={{
                      margin: '5px 0 5px 0',
                      fontSize: '18px',
                      fontWeight: 'bold',
                    }}
                  >
                    GLSoft - Wish Map
                  </p>
                  <p
                    style={{
                      margin: '5px 0 5px 0',
                      fontSize: '16px',
                    }}
                  >
                    使用React-Native、Typescript進行開發，串接Google Map
                    API將公益項目顯示在地圖上讓使用者能夠快速找到附近的公益項目
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: '10px',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#E0E0E0',
                        padding: '5px 10px 5px 10px',
                        borderRadius: '50px',
                        marginRight: '15px',
                      }}
                    >
                      <p
                        style={{
                          color: '#7e7e7e',
                          fontSize: '12px',
                          margin: 0,
                        }}
                      >
                        React Native
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#E0E0E0',
                        padding: '5px 10px 5px 10px',
                        borderRadius: '50px',
                        marginRight: '15px',
                      }}
                    >
                      <p
                        style={{
                          color: '#7e7e7e',
                          fontSize: '12px',
                          margin: 0,
                        }}
                      >
                        Typescript
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#E0E0E0',
                        padding: '5px 10px 5px 10px',
                        borderRadius: '50px',
                        marginRight: '15px',
                      }}
                    >
                      <p
                        style={{
                          color: '#7e7e7e',
                          fontSize: '12px',
                          margin: 0,
                        }}
                      >
                        Google Map API
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: '#CCCCCC',
                      height: '2px',
                      borderRadius: '2px',
                      margin: '15px 0 15px 0',
                    }}
                  ></div>

                  <p
                    style={{
                      margin: '5px 0 5px 0',
                      fontSize: '18px',
                      fontWeight: 'bold',
                    }}
                  >
                    GLSoft - A.S. Watsons
                  </p>
                  <p
                    style={{
                      margin: '5px 0 5px 0',
                      fontSize: '16px',
                    }}
                  >
                    為屈臣氏集團維護、開發新功能，Angular、Typescript進行開發，串接API
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: '10px',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#E0E0E0',
                        padding: '5px 10px 5px 10px',
                        borderRadius: '50px',
                        marginRight: '15px',
                      }}
                    >
                      <p
                        style={{
                          color: '#7e7e7e',
                          fontSize: '12px',
                          margin: 0,
                        }}
                      >
                        Angular
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#E0E0E0',
                        padding: '5px 10px 5px 10px',
                        borderRadius: '50px',
                        marginRight: '15px',
                      }}
                    >
                      <p
                        style={{
                          color: '#7e7e7e',
                          fontSize: '12px',
                          margin: 0,
                        }}
                      >
                        Typescript
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: '#CCCCCC',
                      height: '2px',
                      borderRadius: '2px',
                      margin: '15px 0 15px 0',
                    }}
                  ></div>

                  <p
                    style={{
                      margin: '5px 0 5px 0',
                      fontSize: '18px',
                      fontWeight: 'bold',
                    }}
                  >
                    Side Project - App Development
                  </p>
                  <p
                    style={{
                      margin: '5px 0 5px 0',
                      fontSize: '16px',
                    }}
                  >
                    與大學同學因興趣共同開發的App，使用React-Native、Typescript進行開發
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: '10px',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#E0E0E0',
                        padding: '5px 10px 5px 10px',
                        borderRadius: '50px',
                        marginRight: '15px',
                      }}
                    >
                      <p
                        style={{
                          color: '#7e7e7e',
                          fontSize: '12px',
                          margin: 0,
                        }}
                      >
                        React Native
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#E0E0E0',
                        padding: '5px 10px 5px 10px',
                        borderRadius: '50px',
                        marginRight: '15px',
                      }}
                    >
                      <p
                        style={{
                          color: '#7e7e7e',
                          fontSize: '12px',
                          margin: 0,
                        }}
                      >
                        Typescript
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: '#CCCCCC',
                      height: '2px',
                      borderRadius: '2px',
                      margin: '15px 0 15px 0',
                    }}
                  ></div>

                  <p
                    style={{
                      margin: '5px 0 5px 0',
                      fontSize: '18px',
                      fontWeight: 'bold',
                    }}
                  >
                    大三專題 - 智慧工廠服儀辨識
                  </p>
                  <p
                    style={{
                      margin: '5px 0 5px 0',
                      fontSize: '16px',
                    }}
                  >
                    為了工廠內工作人員的安全，使用Python、OpenCV進行開發，透過攝影機拍攝工作人員的服儀，並透過AI辨識是否符合工廠規定的服儀
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: '10px',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#E0E0E0',
                        padding: '5px 10px 5px 10px',
                        borderRadius: '50px',
                        marginRight: '15px',
                      }}
                    >
                      <p
                        style={{
                          color: '#7e7e7e',
                          fontSize: '12px',
                          margin: 0,
                        }}
                      >
                        Python
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#E0E0E0',
                        padding: '5px 10px 5px 10px',
                        borderRadius: '50px',
                        marginRight: '15px',
                      }}
                    >
                      <p
                        style={{
                          color: '#7e7e7e',
                          fontSize: '12px',
                          margin: 0,
                        }}
                      >
                        Dlib
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#E0E0E0',
                        padding: '5px 10px 5px 10px',
                        borderRadius: '50px',
                        marginRight: '15px',
                      }}
                    >
                      <p
                        style={{
                          color: '#7e7e7e',
                          fontSize: '12px',
                          margin: 0,
                        }}
                      >
                        MySQL
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#E0E0E0',
                        padding: '5px 10px 5px 10px',
                        borderRadius: '50px',
                        marginRight: '15px',
                      }}
                    >
                      <p
                        style={{
                          color: '#7e7e7e',
                          fontSize: '12px',
                          margin: 0,
                        }}
                      >
                        Yolo v4
                      </p>
                    </div>
                  </div>
                </div>
              </Block>
            </div>
          </div>
          <div
            className="footer"
            style={{
              backgroundColor: '#292929',
              height: '100px',
              marginTop: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                color: '#eee',
                fontSize: '20px',
                fontWeight: 'bold',
                marginRight: '30px',
              }}
            >
              Designed and Developed by Han GLSoft
            </p>
            <div
              className="contact-options"
              style={{
                display: 'flex',

                flexDirection: 'row',
                justifyItems: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
              }}
            >
              <a
                href="mailto:han@webglsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: '15px',
                  display: 'flex',
                  justifyItems: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={mail_icon}
                  alt="Mail"
                  style={{ width: '40px', height: '40px' }}
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: '15px',
                  display: 'flex',
                  justifyItems: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={fb_icon}
                  alt="Facebook"
                  style={{ width: '40px', height: '40px' }}
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: '15px',
                  display: 'flex',
                  justifyItems: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={ig_icon}
                  alt="Instagram"
                  style={{ width: '40px', height: '40px' }}
                />
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
