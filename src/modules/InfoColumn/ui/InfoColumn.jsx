import clsx from 'clsx';
import { MainTitle } from '../../../ui/MainTitle';
import { Logo } from '../../../ui/Logo';
import { CaptionTitle } from '../../../ui/CaptionTitle';
import { ContentLayout } from '../layouts/ContentLayout';

export function InfoColumn({ className, content, parSize, titleOrder }) {
  const { title, subtitle, logo } = content || {};
  return (
    <article
      className={clsx(
        'flex flex-col justify-center max-md:relative',
        className,
      )}
    >
      {logo && (
        <Logo
          variant={logo.variant}
          className={logo.styles}
        />
      )}
      <MainTitle
        text={title}
        first={titleOrder}
        titleSize='base'
      />
      {subtitle && (
        <CaptionTitle
          text={subtitle}
          className='mb-6'
        />
      )}
      <ContentLayout
        content={content}
        parSize={parSize}
      />
    </article>
  );
}
