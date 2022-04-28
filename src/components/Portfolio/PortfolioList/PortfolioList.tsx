import React from 'react';
import { portfolioItemTypes } from '../PortfolioWrapper';
import { StaticImage } from 'gatsby-plugin-image';

type PortfolioListProps = {
  filter: portfolioItemTypes;
};

const PortfolioList: React.FC<PortfolioListProps> = ({ filter }) => {
  return (
    <>
      {/* {filter === 'website' && PortfolioArr.map(item => item.type === 'website' && <PortfolioItem {...item} key={item.name} />)}
      {filter === 'store' && PortfolioArr.map(item => item.type === 'shop' && <PortfolioItem {...item} key={item.name} />)} */}
      {filter === 'default' && (
        <>
          <a className="mix prt-card inter" href="https://chiarashop.pl">
            <div className="prt-image">
              <StaticImage
                src="../../../images/chiarashop-ss.jpg"
                alt="Chiara Shop"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Chiara Shop</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="https://mk-prestige.pl/">
            <div className="prt-image">
              <StaticImage
                src="../../../images/mkprestige-ss.jpg"
                alt="MK Prestige - Miłosz Kuriata"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>MK Prestige - Miłosz Kuriata</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="https://www.equilibrium-canna.biz/">
            <div className="prt-image">
              <StaticImage
                src="../../../images/equilibrium-ss.jpg"
                alt="Equilibrium Premium Cannabiotics"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Equilibrium Premium Cannabiotics</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="https://databout.com">
            <div className="prt-image">
              <StaticImage
                src="../../../images/databout-ss.jpg"
                alt="Databout"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Databout</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="http://promaticonline.com">
            <div className="prt-image">
              <StaticImage
                src="../../../images/promatic-online-ss.jpg"
                alt="Promatic Online"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Promatic Online</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="http://discoking.pl">
            <div className="prt-image">
              <StaticImage
                src="../../../images/disco-king-ss.jpg"
                alt="Disco King"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Disco King (Promatic)</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="http://wolnosci14.pl">
            <div className="prt-image">
              <StaticImage
                src="../../../images/wolnosci14-ss.jpg"
                alt="Wolności 14"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Wolności 14 (Promatic)</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="https://inlei.pl">
            <div className="prt-image">
              <StaticImage
                src="../../../images/inlei-ss.jpg"
                alt="Inlei"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Inlei</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="https://secretpleasure.pl/">
            <div className="prt-image">
              <StaticImage
                src="../../../images/secret-pleasure-ss.jpg"
                alt="Secret Pleasure"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Secret Pleasure</h3>
            </div>
          </a>
        </>
      )}

      {filter === 'website' && (
        <>
          <a className="mix prt-card inter" href="https://mk-prestige.pl/">
            <div className="prt-image">
              <StaticImage
                src="../../../images/mkprestige-ss.jpg"
                alt="MK Prestige - Miłosz Kuriata"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>MK Prestige - Miłosz Kuriata</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="https://databout.com">
            <div className="prt-image">
              <StaticImage
                src="../../../images/databout-ss.jpg"
                alt="Databout"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Databout</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="http://promaticonline.com">
            <div className="prt-image">
              <StaticImage
                src="../../../images/promatic-online-ss.jpg"
                alt="Promatic Online"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Promatic Online</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="http://discoking.pl">
            <div className="prt-image">
              <StaticImage
                src="../../../images/disco-king-ss.jpg"
                alt="Disco King"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Disco King (Promatic)</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="http://wolnosci14.pl">
            <div className="prt-image">
              <StaticImage
                src="../../../images/wolnosci14-ss.jpg"
                alt="Wolności 14"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Wolności 14 (Promatic)</h3>
            </div>
          </a>
        </>
      )}

      {filter === 'store' && (
        <>
          <a className="mix prt-card inter" href="https://chiarashop.pl">
            <div className="prt-image">
              <StaticImage
                src="../../../images/chiarashop-ss.jpg"
                alt="Chiara Shop"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Chiara Shop</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="https://www.equilibrium-canna.biz/">
            <div className="prt-image">
              <StaticImage
                src="../../../images/equilibrium-ss.jpg"
                alt="Equilibrium Premium Cannabiotics"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Equilibrium Premium Cannabiotics</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="https://inlei.pl">
            <div className="prt-image">
              <StaticImage
                src="../../../images/inlei-ss.jpg"
                alt="Inlei"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Inlei</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="https://secretpleasure.pl/">
            <div className="prt-image">
              <StaticImage
                src="../../../images/secret-pleasure-ss.jpg"
                alt="Secret Pleasure"
                width={363}
                placeholder="blurred"
                layout="constrained"
              />
              <div className="prt-overlay">
                <div className="prt-icon">
                  <i className="uil uil-link"></i>
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Secret Pleasure</h3>
            </div>
          </a>
        </>
      )}
    </>
  );
};

export default PortfolioList;
