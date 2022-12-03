const FormattedMessage = require('react-intl').FormattedMessage;
const {injectIntl, intlShape} = require('react-intl');
const React = require('react');

const MediaQuery = require('react-responsive').default;
const frameless = require('../../../lib/frameless');

const FlexRow = require('../../../components/flex-row/flex-row.jsx');
const TitleBanner = require('../../../components/title-banner/title-banner.jsx');

require('./hoc-banner.scss');

const TopBanner = props => (
    <TitleBanner className="hoc-banner">
        <FlexRow className="hoc-container column">
            <FlexRow className="hoc-title-container">
                <h1 className="hoc-header">
                    <FormattedMessage id="hocbanner.titleTellStory" />
                </h1>
                <a
                    className="hoc-more-activities button"
                    href="/projects/editor?tutorial=all"
                >
                    <img src="/svgs/tutorials.svg" />
                    <FormattedMessage id="hocbanner.moreActivities" />
                </a>
            </FlexRow>
            <FlexRow className="hoc-banner-images">
                <MediaQuery
                    key="frameless-desktop"
                    minWidth={frameless.desktop}
                >
                    <a href="/story">
                        <FlexRow className="hoc-banner-image column">
                            <img
                                alt={props.intl.formatMessage({id: 'general.createStory'})}
                                src="/images/ideas/activities/create-a-story-thumb.jpg"
                            />
                            <div
                                aria-hidden="true"
                                className="hoc-image-text"
                            >
                                <FormattedMessage id="hocbanner.createAStory" />
                            </div>
                        </FlexRow>
                    </a>
                </MediaQuery>
                <a href="/animate-a-character">
                    <FlexRow className="hoc-banner-image column">
                        <img
                            alt={props.intl.formatMessage({id: 'general.animateCharacter'})}
                            src="/images/ideas/activities/animate-a-character-thumb.jpg"
                        />
                        <div
                            aria-hidden="true"
                            className="hoc-image-text"
                        >
                            <FormattedMessage id="hocbanner.animateACharacter" />
                        </div>
                    </FlexRow>
                </a>
                <a href="/talking-tales">
                    <FlexRow className="hoc-banner-image column">
                        <img
                            alt={props.intl.formatMessage({id: 'general.talkingTales'})}
                            src="/images/ideas/activities/talking-thumb.jpg"
                        />
                        <div
                            aria-hidden="true"
                            className="hoc-image-text"
                        >
                            <FormattedMessage id="hocbanner.talking" />
                        </div>
                    </FlexRow>
                </a>
            </FlexRow>
        </FlexRow>
    </TitleBanner>
);

TopBanner.propTypes = {
    intl: intlShape
};

module.exports = injectIntl(TopBanner);
