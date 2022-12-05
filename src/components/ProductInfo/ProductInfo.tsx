import { ProductGallery } from '../ProductGallery/ProductGallery';
import { ProductControls } from '../ProductControls';
import { ProductAction } from '../ProductAction';

import s from './ProductInfo.module.scss';

export const ProductInfo = () => {
  return (
    <div className={s.product}>
      <h1 className={s.product__title}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>

      <div className={s.product__promo}>
        <div className={s.product__gallery}>
          <ProductGallery />
        </div>

        <div className={s.product__info}>
          <div className={s.product__controls}>
            <ProductControls />
          </div>

          <div className={s.product__price}>
            $799
            <span className={s.product__price_old}>$1199</span>
          </div>

          <div className={s.product__action}>
            <ProductAction />
          </div>

          <ul className={s.product__params}>
            <li className={s.product__params_item}>
              <h5 className={s.product__params_name}>Screen</h5>
              <strong className={s.product__params_value}>6.5” OLED</strong>
            </li>

            <li className={s.product__params_item}>
              <h5 className={s.product__params_name}>Resolution</h5>
              <strong className={s.product__params_value}>2688x1242</strong>
            </li>

            <li className={s.product__params_item}>
              <h5 className={s.product__params_name}>Processor</h5>
              <strong className={s.product__params_value}>
                Apple A12 Bionic
              </strong>
            </li>

            <li className={s.product__params_item}>
              <h5 className={s.product__params_name}>RAM</h5>
              <strong className={s.product__params_value}>3 GB</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className={s.product__about}>
        <h2 className={s.product__about_title}>About</h2>

        <article className={s.product__about_item}>
          <h3 className={s.product__about_item_title}>
            And then there was Pro
          </h3>

          <div className={s.product__about_item_text}>
            <p>
              A transformative triple‑camera system that
              {' '}
              adds tons of capability without complexity.
            </p>

            <p>
              An unprecedented leap in battery life.
              {' '}
              And a mind‑blowing chip that doubles down on machine learning
              {' '}
              and pushes the boundaries of what a smartphone can do.
              {' '}
              Welcome to the first iPhone powerful enough to be called Pro.
            </p>
          </div>
        </article>

        <article className={s.product__about_item}>
          <h3 className={s.product__about_item_title}>
            Camera
          </h3>

          <div className={s.product__about_item_text}>
            <p>
              A transformative triple‑camera system that
              {' '}
              adds tons of capability without complexity.
            </p>

            <p>
              An unprecedented leap in battery life.
              {' '}
              And a mind‑blowing chip that doubles down on machine learning
              {' '}
              and pushes the boundaries of what a smartphone can do.
              {' '}
              Welcome to the first iPhone powerful enough to be called Pro.
            </p>
          </div>
        </article>

        <article className={s.product__about_item}>
          <h3 className={s.product__about_item_title}>
            Shoot it. Flip it. Zoom it. Crop it.
            {' '}
            Cut it. Light it. Tweak it. Love it.
          </h3>

          <div className={s.product__about_item_text}>
            <p>
              A transformative triple‑camera system that
              {' '}
              adds tons of capability without complexity.
            </p>

            <p>
              An unprecedented leap in battery life.
              {' '}
              And a mind‑blowing chip that doubles down on machine learning
              {' '}
              and pushes the boundaries of what a smartphone can do.
              {' '}
              Welcome to the first iPhone powerful enough to be called Pro.
            </p>
          </div>
        </article>
      </div>

    </div>
  );
};
