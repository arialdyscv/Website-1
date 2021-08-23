import React, {FC} from 'react';

import clsx from 'clsx';
import {Container, ProgressBar} from 'components';
import RoadmapHeroImage from '../assets/RoadmapHero.png';

import './RoadmapHero.scss';

type Props = {
  className?: string;
  progressPercentage: number;
};

const RoadmapHero: FC<Props> = ({className, progressPercentage}) => {
  return (
    <Container className={clsx('RoadmapHero', className)}>
      <div className="RoadmapHero__content">
        <h1 className="RoadmapHero__content-title">Roadmap</h1>
        <p className="RoadmapHero__content-description">
          This roadmap is going to be specifically for tasks that get us to finishing up the beta app
        </p>
        <div className="RoadmapHero__progress">
          <ProgressBar className="RoadmapHero__progress-bar" height={16} percentage={progressPercentage} />
          <div className="RoadmapHero__progress-percentage">{progressPercentage}% complete</div>
        </div>
      </div>
      <img alt="Roadmap Hero" className="RoadmapHero__image" src={RoadmapHeroImage} />
    </Container>
  );
};

export default RoadmapHero;
