import React, { useState } from "react";
import styled from "styled-components";
import "./MainSection.css";

const FilterContainer = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

// apply styles above existing ones
const StyledResultsFilter = styled(FilterContainer)`
  border: solid 2px gold;
  font-weight: bold;
  color: green;
`;

const ResultsFilter = (props) => {
  let sections;
  let setSections;
  [sections, setSections] = useState(props.sections);

  let renderedSections = sections.map((section) => (
    <span className="FilterSection" key={section}>
      {section}
    </span>
  ));

  return (
    <StyledResultsFilter
      className="FilterContainer"
      children={renderedSections}
    />
  );
};

const Card = (props, className) => {
  let name;
  let setName;

  let release;
  let setRelease;

  let jenre;
  let setJenre;

  [name, setName] = useState(props.name);
  [release, setRelease] = useState(props.release);
  [jenre, setJenre] = useState(props.jenre);

  return (
    <div className={className}>
      <div className="Card">
        <div className="CardMainSection"></div>
        <div className="CardNameRelease">
          <span className="FilmNameSpan">{name}</span>
          <span className="ReleaseSpan">{release}</span>
        </div>
        <div className="CardJenre">{jenre}</div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  name: `Very good film`,
  release: "2001",
  jenre: "unknown",
};

const MainSection = (props) => {
  let placeHolderArray = useState("What do You want to watch");
  var inputPlaceHolder = placeHolderArray[0];
  var setplaceHolder = placeHolderArray[1];

  let labelArray = useState("Find Your movie!");
  var labelText = labelArray[0];
  var setLabel = labelArray[1];

  function handleClick() {
    setplaceHolder("ZEN!");
  }

  // Todo: fetch from back-end
  let sectionsForFilter = ["section-1", "section-2", "section-3", "section-4"];
  let filmCards = [
    { name: "The Fight Club", release: "1999", jenre: "comedy, thriller" },
    {
      name: "Venom",
      release: "2018",
      jenre: "action, horror, science fiction",
    },
    {},
    {},
    {},
    {},
    {},
  ];

  return (
    <>
      <ResultsFilter sections={sectionsForFilter} />
      <div className="MainSectionFlex">
        {filmCards.map((card) => (
          <Card
            name={card.name}
            release={card.release}
            jenre={card.jenre}
            key={`${card.name} + ${Math.random()}`}
          ></Card>
        ))}
      </div>
    </>
  );
};

const OopsText = (props) => {
  return (
    <div className="OopsDiv">
      <h2 className="OopsText">
        Oops, something went wrong... We are doing our best to fix the issue!
      </h2>
    </div>
  );
};

const ErrorBoundaryMainSection = () => {
  let isDataInPlace = true;

  return isDataInPlace ? <MainSection /> : <OopsText />;
};

export default ErrorBoundaryMainSection;
