import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    //whenever page refresh, goes to top of the page
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  });
  window.onscroll = function () {
    whenScroll();
  };
  const whenScroll = () => {
    let scroll = document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;
    document.getElementById('progressiveBar').style.width = scrolled + '%';
  };
  return (
    <div className="App">
      <div className="App-header">
        <div className="header">
          <h2>Progressive Bar Demo</h2>
          <div className="progress-container">
            <div className="progress-bar" id="progressiveBar"></div>
          </div>
        </div>
        <div className="content">
          <h3>Scroll Down</h3>
          <p>
            <p>
              History of technology, the development over time of systematic
              techniques for making and doing things. The term technology, a
              combination of the Greek technē, “art, craft,” with logos, “word,
              speech,” meant in Greece a discourse on the arts, both fine and
              applied. When it first appeared in English in the 17th century, it
              was used to mean a discussion of the applied arts only, and
              gradually these “arts” themselves came to be the object of the
              designation. By the early 20th century the term embraced a growing
              range of means, processes, and ideas in addition to tools and
              machines. By mid-century technology was defined by such phrases as
              “the means or activity by which man seeks to change or manipulate
              his environment.” Even such broad definitions have been criticized
              by observers who point out the increasing difficulty of
              distinguishing between scientific inquiry and technological
              activity. A highly compressed account of the history of technology
              such as this one must adopt a rigorous methodological pattern if
              it is to do justice to the subject without grossly distorting it
              one way or another. The plan followed in the present article is
              primarily chronological, tracing the development of technology
              through phases that succeed each other in time. Obviously, the
              division between phases is to a large extent arbitrary. One factor
              in the weighting has been the enormous acceleration of Western
              technological development in recent centuries; Eastern technology
              is considered in this article in the main only as it relates to
              the development of modern technology.
            </p>
            <p>
              Within each chronological phase a standard method has been adopted
              for surveying the technological experience and innovations. This
              begins with a brief review of the general social conditions of the
              period under discussion, and then goes on to consider the dominant
              materials and sources of power of the period, and their
              application to food production, manufacturing industry, building
              construction, transport and communications, military technology,
              and medical technology. In a final section the sociocultural
              consequences of technological change in the period are examined.
              This framework is modified according to the particular
              requirements of every period— discussions of new materials, for
              instance, occupy a substantial place in the accounts of earlier
              phases when new metals were being introduced but are comparatively
              unimportant in descriptions of some of the later phases—but the
              general pattern is retained throughout. One key factor that does
              not fit easily into this pattern is that of the development of
              tools. It has seemed most convenient to relate these to the study
              of materials, rather than to any particular application, but it
              has not been possible to be completely consistent in this
              treatment. Further discussion of specific areas of technological
              development is provided in a variety of other articles: for
              example, seeelectronics; exploration; information processing.
            </p>
            <p>
              History of technology, the development over time of systematic
              techniques for making and doing things. The term technology, a
              combination of the Greek technē, “art, craft,” with logos, “word,
              speech,” meant in Greece a discourse on the arts, both fine and
              applied. When it first appeared in English in the 17th century, it
              was used to mean a discussion of the applied arts only, and
              gradually these “arts” themselves came to be the object of the
              designation. By the early 20th century the term embraced a growing
              range of means, processes, and ideas in addition to tools and
              machines. By mid-century technology was defined by such phrases as
              “the means or activity by which man seeks to change or manipulate
              his environment.” Even such broad definitions have been criticized
              by observers who point out the increasing difficulty of
              distinguishing between scientific inquiry and technological
              activity. A highly compressed account of the history of technology
              such as this one must adopt a rigorous methodological pattern if
              it is to do justice to the subject without grossly distorting it
              one way or another. The plan followed in the present article is
              primarily chronological, tracing the development of technology
              through phases that succeed each other in time. Obviously, the
              division between phases is to a large extent arbitrary. One factor
              in the weighting has been the enormous acceleration of Western
              technological development in recent centuries; Eastern technology
              is considered in this article in the main only as it relates to
              the development of modern technology.
            </p>
            <p>
              Within each chronological phase a standard method has been adopted
              for surveying the technological experience and innovations. This
              begins with a brief review of the general social conditions of the
              period under discussion, and then goes on to consider the dominant
              materials and sources of power of the period, and their
              application to food production, manufacturing industry, building
              construction, transport and communications, military technology,
              and medical technology. In a final section the sociocultural
              consequences of technological change in the period are examined.
              This framework is modified according to the particular
              requirements of every period— discussions of new materials, for
              instance, occupy a substantial place in the accounts of earlier
              phases when new metals were being introduced but are comparatively
              unimportant in descriptions of some of the later phases—but the
              general pattern is retained throughout. One key factor that does
              not fit easily into this pattern is that of the development of
              tools. It has seemed most convenient to relate these to the study
              of materials, rather than to any particular application, but it
              has not been possible to be completely consistent in this
              treatment. Further discussion of specific areas of technological
              development is provided in a variety of other articles: for
              example, seeelectronics; exploration; information processing.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
