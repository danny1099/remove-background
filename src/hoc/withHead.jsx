import { Fragment } from 'react';
import { Helmet } from 'react-helmet';

export const withHead = (Page, { title, description, keyword }) => {
  const CustomHead = (props) => {
    return (
      <Fragment>
        <Helmet>
          <title>{`${title || 'Home'} | Remove My Background `}</title>
          <meta name='description' content={description} />
          <meta
            name='keywords'
            content={`IA para eliminar fondos, Mejora de imágenes, Herramienta de eliminación de fondos, ${keyword}`}
          />
        </Helmet>

        <Page {...props} />
      </Fragment>
    );
  };
  return CustomHead;
};
