const bindAll = require('lodash.bindall');
const FormattedHTMLMessage = require('react-intl').FormattedHTMLMessage;
const FormattedMessage = require('react-intl').FormattedMessage;
const injectIntl = require('react-intl').injectIntl;
const intlShape = require('react-intl').intlShape;
const React = require('react');

const Button = require('../../components/forms/button.jsx');
const FlexRow = require('../../components/flex-row/flex-row.jsx');
const MasonryGrid = require('../../components/masonrygrid/masonrygrid.jsx');
const TitleBanner = require('../../components/title-banner/title-banner.jsx');
const TTTModal = require('../../components/modal/ttt/modal.jsx');
const TTTTile = require('../../components/ttt-tile/ttt-tile.jsx');

const Page = require('../../components/page/www/page.jsx');
const render = require('../../lib/render.jsx');

const Tiles = require('./ttt.json');

require('./ideas.scss');

class Ideas extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleShowTTTModal',
            'handleHideTTTModal',
            'renderTiles'
        ]);
        this.state = {
            currentTile: Tiles[0],
            TTTModalOpen: false
        };
    }
    handleShowTTTModal (tile) {
        // expects translated tile
        this.setState({
            currentTile: tile,
            TTTModalOpen: true
        });
    }
    handleHideTTTModal () {
        this.setState({
            TTTModalOpen: false
        });
    }
    renderTiles () {
        return Tiles.map((tile, key) => {
            const translatedTile = {
                tutorialUrl: `/projects/editor/?tutorial=${tile.tutorialUrl}`,
                modalImage: tile.modalImage,
                description: this.props.intl.formatMessage({id: tile.description}),
                guideUrl: this.props.intl.formatMessage({id: tile.guideUrl}),
                thumbImage: tile.thumbImage,
                title: this.props.intl.formatMessage({id: tile.title}),
                cardsUrl: this.props.intl.formatMessage({id: tile.cardsUrl})
            };
            return (
                <TTTTile
                    key={key}
                    onClick={() => { // eslint-disable-line react/jsx-no-bind
                        this.handleShowTTTModal(translatedTile);
                    }}
                    {...translatedTile}
                />
            );
        });
    }
    render () {
        return (
            <div>
                <div className="banner-wrapper">
                    <TitleBanner className="masthead ideas-banner">
                        <div className="title-banner-p">
                            <img
                                src="/images/ideas/masthead-illustration.svg"
                            />
                            <h1 className="title-banner-h1">
                                <FormattedMessage id="ideas.headerMessage" />
                            </h1>
                            <Button
                                aria-label={this.props.intl.formatMessage({
                                    id: 'ideas.headerButtonMessage'
                                })}
                                href="/projects/editor/?tutorial=all"
                                className="ideas-button"
                            >
                                <img
                                    alt=""
                                    src="/images/ideas/bulb-icon.svg"
                                />
                                <span aria-hidden="true" ><FormattedMessage id="ideas.headerButtonMessage" /></span>
                            </Button>
                        </div>
                    </TitleBanner>
                </div>
                <div className="tips-getting-started">
                    <div className="inner">
                        <FlexRow
                            as="section"
                            className="tips-info-section tips-left"
                        >
                            <div className="ideas-image">
                                <img
                                    src="/images/ideas/getting-started-illustration.svg"
                                />
                            </div>
                            <div>
                                <h2>
                                    <FormattedMessage id="ideas.gettingStartedTitle" />
                                </h2>
                                <p>
                                    <FormattedHTMLMessage id="ideas.gettingStartedText" />
                                </p>
                                <Button
                                    aria-label={this.props.intl.formatMessage({
                                        id: 'ideas.tryIt'
                                    })}
                                    href="/projects/editor/?tutorial=getStarted"
                                    className="ideas-button"
                                >
                                    <img
                                        alt=""
                                        src="/images/ideas/try-it-icon.svg"
                                    />
                                    <sapn aria-hidden="true"><FormattedMessage id="ideas.tryIt" /></sapn>
                                </Button>
                            </div>
                        </FlexRow>
                    </div>
                </div>
                <div className="tips-activity-guides">
                    <div className="inner">
                        <section className="ttt-section">
                            <div className="ttt-head">
                                <h2 tabIndex="0">
                                    <FormattedMessage id="ideas.activityGuidesTitle" />
                                </h2>
                                <p tabIndex="0">
                                    <FormattedHTMLMessage id="ideas.activityGuidesText" />
                                </p>
                            </div>
                            <MasonryGrid >
                                {this.renderTiles()}
                            </MasonryGrid>
                            <TTTModal
                                isOpen={this.state.TTTModalOpen}
                                onRequestClose={this.handleHideTTTModal}
                                {...this.state.currentTile}
                            />
                            <Button
                                aria-label={this.props.intl.formatMessage({
                                    id: 'ideas.seeAllTutorials'
                                })}
                                href="/projects/editor/?tutorial=all"
                                className="ideas-button wide-button"
                            >
                                <span aria-hidden="true"><FormattedMessage id="ideas.seeAllTutorials" /></span>
                            </Button>
                        </section>
                    </div>
                </div>
                <div>
                    <div className="inner">
                        <FlexRow
                            as="section"
                            className="tips-info-section cards-info ideas-all-cards"
                        >
                            <div className="tips-info-body">
                                <h2>
                                    <FormattedMessage id="ideas.cardsTitle" />
                                </h2>
                                <p>
                                    <FormattedHTMLMessage id="ideas.cardsText" />
                                </p>
                                <Button
                                    aria-label={this.props.intl.formatMessage({
                                        id: 'general.downloadPDF'
                                    })}
                                    href={this.props.intl.formatMessage({
                                        id: 'cards.scratch-cards-allLink'
                                    })}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="ideas-button"
                                >
                                    <img
                                        alt=""
                                        src="/images/ideas/download-icon.svg"
                                    />
                                    <span aria-hidden="true"><FormattedMessage id="general.downloadPDF" /></span>
                                </Button>
                            </div>
                            <div className="tips-info-body tips-illustration">
                                <img
                                    src="/images/ideas/cards-illustration.svg"
                                />
                            </div>
                        </FlexRow>
                    </div>
                </div>
                <div className="inner">
                    <div className="tips-divider" />
                </div>
                <div>
                    <div className="inner">
                        <FlexRow
                            as="section"
                            className="ideas-starter tips-info-section tips-left"
                        >
                            <div className="ideas-image">
                                <img
                                    src="/images/ideas/starter-projects-illustration.svg"
                                />
                            </div>
                            <div className="tips-info-body">
                                <h2>
                                    <FormattedMessage id="ideas.starterProjectsTitle" />
                                </h2>
                                <p>
                                    <FormattedHTMLMessage id="ideas.starterProjectsText" />
                                </p>
                                <p>
                                    <Button
                                        aria-label={this.props.intl.formatMessage({
                                            id: 'ideas.starterProjectsButton'
                                        })}
                                        href="/starter_projects"
                                        className="ideas-button"
                                    >
                                        <span aria-hidden="true">
                                            <FormattedMessage id="ideas.starterProjectsButton" />
                                        </span>
                                    </Button>
                                </p>
                            </div>
                        </FlexRow>
                    </div>
                </div>
                <div className="gray-area">
                    <div className="inner">
                        <FlexRow
                            as="section"
                            className="tips-info-section mod-align-top"
                        >
                            <div className="tips-info-body mod-narrow">
                                <img
                                    className="tips-icon"
                                    alt=""
                                    src="/images/tips/download-icon.svg"
                                />
                                <h3>
                                    <FormattedMessage id="ideas.desktopEditorHeader" />
                                </h3>
                                <p>
                                    <FormattedHTMLMessage id="ideas.desktopEditorBody" />
                                </p>
                            </div>
                            <div className="tips-info-body mod-narrow">
                                <img
                                    className="tips-icon"
                                    alt=""
                                    src="/images/tips/question-icon.svg"
                                />
                                <h3>
                                    <FormattedMessage id="ideas.questionsHeader" />
                                </h3>
                                <p>
                                    <FormattedHTMLMessage id="ideas.questionsBody" />
                                </p>
                            </div>
                        </FlexRow>
                    </div>
                </div>
            </div>
        );
    }
}

Ideas.propTypes = {
    intl: intlShape
};

const WrappedIdeas = injectIntl(Ideas);

render(
    <Page><WrappedIdeas /></Page>, document.getElementById('app'));
