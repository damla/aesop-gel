import React from 'react';
import cx from 'classnames';
import 'normalize.css';
import '~/styles/base.module.css';
import AppContainer from '~/components/containers/AppContainer';
import BodyCopy from '~/components/layouts/BodyCopy';
import Button from '~/components/elements/Button';
import DoubleImage from '~/components/layouts/DoubleImage';
import Figure from '~/components/elements/Figure';
import FooterView from '~/components/views/FooterView';
import Heading from '~/components/elements/Heading';
import Hyperlink from '~/components/elements/Hyperlink';
import Image from '~/components/elements/Image';
import PageTitle from '~/components/layouts/PageTitle';
import ProductFeature from '~/components/layouts/ProductFeature';
import ProductTemplate from '~/components/templates/ProductTemplate';
import Quote from '~/components/elements/Quote';
import TextOverHero from '~/components/layouts/TextOverHero';
import TwoColumnList from '~/components/layouts/TwoColumnList';
import Video from '~/components/elements/Video';
import ProductTemplateFixture from '~/components/templates/ProductTemplate/ProductTemplate.fixture';
import Props from './AppView.types';
import styles from './AppView.module.css';

const AppView = AppContainer(({ data, handlers }: Props) => {
  const classes = cx(styles.base);
  const { onClick } = handlers;
  const { image } = data;
  const { altText, cta, large, medium, small } = image;

  return (
    <div>
      <div className={classes}>
        <TwoColumnList
          leftColumn={[
            {
              id: '1',
              primaryTitle: 'Title 1',
              subTitle: 'Sub title 1',
              subItemLinks: [
                {
                  id: '1',
                  text: 'About',
                  url: 'https://www.aesop.com/au/r/about',
                },
                {
                  id: '2',
                  text: 'About 2',
                  url: 'https://www.aesop.com/au/r/about',
                },
              ],
            },
            {
              id: '2',
              primaryTitle: 'Title 2',
              subTitle: 'Sub title 2',
              subItemLinks: [
                {
                  id: '1',
                  text: 'Philosophy',
                  url: 'https://www.aesop.com/au/r/philosophy-to-products',
                },
              ],
            },
          ]}
          rightColumn={[
            {
              id: '1',
              primaryTitle: 'Title 1',
              subTitle: 'Sub title 1',
              subItemLinks: [
                {
                  id: '1',
                  text: 'About',
                  url: 'https://www.aesop.com/au/r/about',
                },
                {
                  id: '2',
                  text: 'About 2',
                  url: 'https://www.aesop.com/au/r/about',
                },
              ],
            },
          ]}
        />
      </div>

      <div className={classes}>
        <Heading level="2" size="small">
          Heading | Element Component
        </Heading>
        <Heading level="1" size="xLarge">
          Heading level="1" size="xLarge" Fortification of the highest order.
          Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL
        </Heading>
        <pre>
          <code>
            {`<Heading level="1" size="xLarge">
  ...
</Heading>`}
          </code>
        </pre>
        <Heading level="2" size="large">
          Heading level="3" size="large" Fortification of the highest order.
          Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL
        </Heading>
        <Heading level="2" size="medium">
          Heading level="2" size="medium" Fortification of the highest order.
          Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL
        </Heading>
        <Heading level="3" size="small">
          Heading level="3" size="small" Fortification of the highest order.
          Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL
        </Heading>
        <Heading level="4" size="xSmall">
          Heading level="4" size="xSmall" Fortification of the highest order.
          Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL
        </Heading>
        <Heading level="5" size="xSmall">
          Heading level="5" size="xSmall" Fortification of the highest order.
          Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL
        </Heading>
        <Heading level="6" size="xSmall">
          Heading level="6" size="xSmall" Fortification of the highest order.
          Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL
        </Heading>
        <hr />
        <Heading level="2" size="small">
          Button | Element Component
        </Heading>
        <Button onClick={onClick} title="Button">
          Button
        </Button>
        <br />
        <Button disabled={true} onClick={onClick} title="Button">
          Disabled Button
        </Button>
        <br />
        <Button alternate={true} onClick={onClick} title="Button">
          Alternate Button
        </Button>
        <br />
        <Button
          alternate={true}
          disabled={true}
          onClick={onClick}
          title="Button"
        >
          Disabled Altternate Button
        </Button>
        <br />
        <Button title="Button" to="/about">
          Internal link
        </Button>
        <br />
        <Button href="http://aesop.com" title="Button">
          External link
        </Button>
        <br />
        <Button inline={true} onClick={onClick} title="Button">
          Inline button
        </Button>
        <br />
        <Button icon={true} inline={true} title="Button" to="/about">
          Inline internal link with icon
        </Button>
        <br />
        <Button
          href="http://aesop.com"
          icon={true}
          inline={true}
          title="Button"
        >
          Inline external link with icon
        </Button>
        <pre>
          <code>
            {`<Button inline icon href="http://aesop.com" title="Button">
  Inline external link with icon
</Button>`}
          </code>
        </pre>
        <br />
        <Button icon={true} title="Button" to="/about">
          Internal link with icon
        </Button>
        <pre>
          <code>
            {`<Button icon to="/about" title="Button">
  Internal link with icon
</Button>`}
          </code>
        </pre>
        <br />
        <Button href="http://aesop.com" icon={true} title="Button">
          External link with icon
        </Button>
        <br />
        <Button alternate={true} icon={true} title="Button" to="/about">
          Alternate internal link with icon
        </Button>
        <br />
        <Button
          alternate={true}
          href="http://aesop.com"
          icon={true}
          title="Button"
        >
          Alternate external link with icon
        </Button>
        <br />
        <br />
        <hr />
        <Heading level="2" size="small">
          Picture | Element Component
        </Heading>
        <Image
          altText={altText}
          cta={cta}
          large={large}
          medium={medium}
          small={small}
        />
        <br />

        <hr />
        <Heading level="2" size="small">
          Hyperlink
        </Heading>

        <Hyperlink text="Button" url="http://aesop.com" />
        <br />

        <hr />
        <Heading level="2" size="small">
          Video | Element Component
        </Heading>
        <Video
          autoplay={true}
          fallbackImage={{
            id: 'image',
            altText: 'solid image',
            large:
              'https://www.pexels.com/photo/abstract-attractive-backdrop-background-988872/',
          }}
          id="video"
          large="https://player.vimeo.com/external/300219772.hd.mp4?s=981a375b08836e6d99532afaefda0b9a78fbf404&profile_id=174"
          loop={true}
          medium="http://media.w3.org/2010/05/sintel/trailer.mp4"
          small="http://media.w3.org/2010/05//bunny/movie.mp4"
        />
        <br />

        <hr />
        <Heading level="2" size="small">
          Square Image with Caption
        </Heading>
        <Figure
          caption="Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL"
          id="SquareImage new campaign"
        >
          <Image
            altText="Image of Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL"
            cta={{
              id: 'item-1.jpg2x',
              openInANewWindow: true,
              url: 'https://www.aesop.com/au/r/philosophy-to-products',
            }}
            large="https://wip.aesop-web-ui.aesopdigital.io/images/square/large/item-2.jpg 2x"
            medium="https://wip.aesop-web-ui.aesopdigital.io/images/square/medium/item-2.jpg 2x"
            small="https://wip.aesop-web-ui.aesopdigital.io/images/square/small/item-2.jpg 2x"
            type="componentSquareImage"
          />
        </Figure>
        <br />
        <hr />
        <Heading level="3" size="small">
          FullBleedImage with Caption
        </Heading>
      </div>
      <Figure
        caption="Floor-to-ceiling Scottish Sycamore shelving was custom-made by local cabinetmakers Method Studio, crafted from a single tree. Floor-to-ceiling Scottish Sycamore shelving was custom-made by local cabinetmakers Method Studio, crafted from a single tree. Ideal for labour-wearied hands. 300 characters!"
        id="fullBleed-internal"
      >
        <Image
          altText="Image of one of the offices in Tokyo"
          large="https://wip.aesop-web-ui.aesopdigital.io/images/full-bleed/large/store-1.jpg 2x"
          medium="https://wip.aesop-web-ui.aesopdigital.io/images/full-bleed/medium/store-1.jpg 2x"
          small="https://wip.aesop-web-ui.aesopdigital.io/images/full-bleed/small/store-1.jpg 2x"
          type="componentFullBleedImage"
        />
      </Figure>
      <div className={classes}>
        <hr />
        <Heading level="2" size="small">
          Quote | Element Component
        </Heading>
        <Quote author="Diana Ramirez" noTopPadding={true}>
          ‘Do not wish to be anything but what you are, and try to be that
          perfectly’
        </Quote>
      </div>
      <div className={classes}>
        <hr />
        <Heading level="2" size="large">
          Layout Components
        </Heading>

        <Heading level="2" size="small">
          ProductFeature
        </Heading>
        <ProductFeature
          image={{
            altText: 'Image of Parsley Seed Anti-Oxidant Eye Cream',
            id:
              'https://wip.aesop-web-ui.aesopdigital.io/images/square/large/item-2.jpg 2x',
            large:
              'https://wip.aesop-web-ui.aesopdigital.io/images/square/large/item-2.jpg 2x',
          }}
          productDetails={{
            name: 'Parsley Seed Anti-Oxidant Eye Cream',
            priceDetails: '0.3 fl oz. / $87',
          }}
        />

        <hr />
        <Heading level="2" size="small">
          Page Title
        </Heading>
        <PageTitle
          id="Parsley"
          subcopy="Subcopy: Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL"
        >
          Title: Fortification of the highest order.
        </PageTitle>
        <PageTitle
          eyebrow="Eyebrow: Offers fortification of the highest order against free radicals."
          id="Anti-Oxidant"
          subcopy="Subcopy: Parsley Seed Cream. Intensely soothing, nourishing and hydrating, this elegant formulation contains a potent blend of botanicals that offer fortification of the highest order against free radicals."
        >
          Title: Fortification of the highest order. Parsley Seed Anti-Oxidant
          Facial Hydrating Cream.
        </PageTitle>

        <PageTitle id="Hydrating">
          Title: Fortification of the highest order. Parsley Seed Anti-Oxidant
          Facial Hydrating Cream. The inclusion of skin-conditioning Vitamin E
          makes this an ideal overnight moisturiser
        </PageTitle>
        <br />

        <hr />
        <Heading level="2" size="small">
          BodyCopy | Layout Component
        </Heading>
        <BodyCopy
          copy="Parsley Seed Cream. [The Paris Review](http://theparisreview.org) Intensely soothing, nourishing and hydrating, this elegant formulation contains a potent blend of botanicals that offer fortification of the highest order against free radicals."
          cta={{
            id: 'button-id',
            openInANewWindow: true,
            url: '/about',
            text: 'Read more',
          }}
          eyebrow="Recommended Nearby"
          id="Anti-Oxidant"
          primaryTitle="Aesop & The Paris Review: A Partnership Extended"
          quote="Fortification of the highest order. Parsley Seed Anti-Oxidant Facial Hydrating Cream."
          secondaryTitle="Active Nutrients"
        />
        <hr />
        <Heading level="2" size="small">
          TextOverHero
        </Heading>
      </div>

      <TextOverHero
        copy="Offering an exceptionally mild yet thorough cleanse, Gentle Facial Cleansing Milk removes surface impurities without stripping moisture, making it especially beneficial for dry or sensitive skin."
        cta={{
          id: 'button-id',
          openInANewWindow: true,
          style: 'Internal Button Link',
          text: 'Explore',
          type: 'Absolute',
          url: 'http://google.com',
        }}
        id="ImageHeader-old-component"
        noTopMargin={true}
        title="In Two Minds"
        video={{
          autoplay: true,
          id: 'TextOverHero',
          loop: true,
          fallbackImage: {
            altText: 'Image of one of the offices in Tokyo',
            id: 'fullBleed-internal',
            large:
              'https://wip.aesop-web-ui.aesopdigital.io/images/full-bleed/large/mc-image-header-1.jpg 2x',
            medium:
              'https://wip.aesop-web-ui.aesopdigital.io/images/full-bleed/medium/mc-image-header-1.jpg 2x',
            small:
              'https://wip.aesop-web-ui.aesopdigital.io/images/full-bleed/small/mc-image-header-1.jpg 2x',
            type: 'componentFullBleedImage',
          },
        }}
      />

      <div className={classes}>
        <hr />
        <Heading level="2" size="small">
          TextOverHeroVideo
        </Heading>
      </div>

      <TextOverHero
        copy="Offering an exceptionally mild yet thorough cleanse, Gentle Facial Cleansing Milk removes surface impurities without stripping moisture, making it especially beneficial for dry or sensitive skin."
        cta={{
          id: 'button-id',
          openInANewWindow: true,
          url: 'http://google.com',
          text: 'Explore',
          type: 'Absolute',
          style: 'Internal Button Link',
        }}
        eyebrow="The Aesop Foundation"
        hasLightText={true}
        id="ImageHeader-old-component"
        noTopMargin={true}
        subtitle="The skin at ease"
        title="Gentle Facial Cleansing Milk"
        video={{
          autoplay: true,
          fallbackImage: {
            altText: 'Image of one of the offices in Tokyo',
            id: 'fullBleed-internal',
            large:
              'https://wip.aesop-web-ui.aesopdigital.io/images/full-bleed/large/mc-image-header-2.jpg 2x',
            medium:
              'https://wip.aesop-web-ui.aesopdigital.io/images/full-bleed/medium/mc-image-header-2.jpg 2x',
            small:
              'https://wip.aesop-web-ui.aesopdigital.io/images/full-bleed/small/mc-image-header-2.jpg 2x',
            type: 'componentFullBleedImage',
          },
          id: 'video',
          large:
            'https://wip.aesop-web-ui.aesopdigital.io/videos/home-desktop-boxes.mp4',
          loop: true,
          medium: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
          small: 'http://media.w3.org/2010/05//bunny/movie.mp4',
        }}
      />
      <br />
      <br />
      <div className={classes}>
        <hr />
        <Heading level="2" size="small">
          DoubleImage | Layout Component
        </Heading>
      </div>
      <DoubleImage
        id="double-image-careers-page"
        left={
          <Figure
            caption="A tactile approach infuses our work, from our product development to our retail service and visual merchandising."
            id="left-image-id"
          >
            <Image
              altText="Milk Cleansing Campaign Aesop 2019"
              cta={{
                id: 'milk-cleansing,jpg',
                url: 'https://www.aesop.com/au/r/philosophy-to-products',
              }}
              large="https://wip.aesop-web-ui.aesopdigital.io/images/vertical/large/poster-1.jpg 2x"
              medium="https://wip.aesop-web-ui.aesopdigital.io/images/vertical/medium/poster-1.jpg 2x"
              small="https://wip.aesop-web-ui.aesopdigital.io/images/vertical/small/poster-1.jpg 2x"
            />
          </Figure>
        }
        right={
          <Figure
            caption="and the senses. \n\nDuring each appointment," // 'Andy Warhol \n\nSilkscreen \n\n32\"x23\" \n\nEdition of 150 \n\nSigned and numbered'
            id="right-caption-id"
          >
            <Image
              altText="Milk Cleansing Campaign Aesop 2019"
              cta={{
                id: 'milk-cleansing,jpg',
                url: 'https://www.aesop.com/au/r/philosophy-to-products',
              }}
              large="https://wip.aesop-web-ui.aesopdigital.io/images/vertical/large/poster-2.jpg 2x"
              medium="https://wip.aesop-web-ui.aesopdigital.io/images/vertical/medium/poster-2.jpg 2x"
              small="https://wip.aesop-web-ui.aesopdigital.io/images/vertical/small/poster-2.jpg 2x"
            />
          </Figure>
        }
      />
      <div className={classes}>
        <hr />
        <Heading level="2" size="small">
          TwoColumn | Layout Component
        </Heading>
      </div>

      <div className={classes}>
        <hr />
        <Heading level="2" size="small">
          Footer | Layout Component
        </Heading>
      </div>
      <FooterView
        siteNavigationPrimary={{
          links: [
            {
              text: 'Contact us',
              id: 'contact-us',
              url: 'https://www.aesop.com/au/r/contact-us',
              style: 'No Icon Link',
            },
            {
              text: 'Delivery and returns',
              id: 'delivery-and-returns',
              url: 'https://www.aesop.com/au/r/shipping/',
              style: 'No Icon Link',
            },
            {
              text: 'Terms and conditions',
              id: 'terms-and-conditions',
              url: 'https://www.aesop.com/au/r/terms',
              style: 'No Icon Link',
            },
            {
              text: 'Track your order',
              id: 'track-your-order',
              url: 'http://track.aesop.com/',
              style: 'No Icon Link',
            },
            {
              text: 'Check Gift Card balance',
              id: 'checkgiftcard-balance',
              url: 'https://www.aesop.com/au/r/gift-card-balance',
              style: 'No Icon Link',
            },
            {
              text: 'Privacy policy',
              id: 'privacy-policy',
              url: 'https://www.aesop.com/au/r/privacy/',
              style: 'No Icon Link',
            },
            {
              text: 'Accessibility',
              id: 'accessibility',
              url: 'https://www.aesop.com/au/r/accessibility',
              style: 'No Icon Link',
            },
          ],
          title: 'Contact Us',
        }}
        siteNavigationSecondary={{
          links: [
            {
              text: 'Our story',
              id: 'our-story',
              url: 'http://www.aesop.com/au/r/about',
              style: 'No Icon Link',
            },
            {
              text: 'Careers',
              id: 'careers',
              url: 'https://www.aesop.com/au/r/careers',
              style: 'No Icon Link',
            },
            {
              text: 'Press',
              id: 'press',
              url: 'https://www.aesop.com/au/r/contact-us/',
              style: 'No Icon Link',
            },
            {
              text: 'Corporate gifts',
              id: 'corporate-gifts',
              url: 'https://www.aesop.com/au/r/corporate-gifting',
              style: 'No Icon Link',
            },
            {
              text: 'Facial appointments',
              id: 'facial-appointments',
              url: 'https://www.aesop.com/au/r/facial-appointments',
              style: 'No Icon Link',
            },
            {
              text: 'FAQs',
              id: 'faqs',
              url: 'https://www.aesop.com/au/r/faqs',
              style: 'No Icon Link',
            },
          ],
          title: 'About',
        }}
        siteNavigationTernary={{
          links: [
            {
              text: 'Instagram',
              id: 'instagram',
              url: 'https://www.instagram.com/aesopskincare/',
              style: 'External Text Link',
            },
            {
              text: 'Twitter',
              id: 'twitter',
              url: 'https://twitter.com/aesopskincare',
              style: 'External Text Link',
            },
            {
              text: 'LinkedIn',
              id: 'linkedIn',
              url: 'https://www.linkedin.com/company/aesop/',
              style: 'External Text Link',
            },
          ],
          title: 'Social',
        }}
      />
      <ProductTemplate data={ProductTemplateFixture.data} />
    </div>
  );
});

export default AppView;
