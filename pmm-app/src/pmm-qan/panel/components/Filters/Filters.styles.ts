import { css } from 'emotion';

import { selectThemeVariant, stylesFactory } from '@grafana/ui';
import { GrafanaTheme } from '@grafana/data';
import { getThemeParameters } from 'shared/components/helpers/selectThemeVariant';

export const getStyles = stylesFactory((theme: GrafanaTheme) => {
  const parameters = getThemeParameters(theme);

  return {
    getFiltersWrapper: (height) => css`
    border: 1px solid rgb(40, 40, 40);
    padding: 5px 16px !important;
    overflow-y: scroll;
    height: ${height}px;
  `,
    filtersField: css`
    width: 100%;
    input {
        color: ${parameters.mainTextColor} !important;
        background-color: ${parameters.table.backgroundColor} !important;
    }
  `,
    filtersHeader: css`
    display: flex;
    align-items: baseline;
    padding: 5px 0px !important;
    height: 50px !important;
    padding-top: 15px !important;
    justify-content: space-between;
  `,
    filtersDisabled: css`
    opacity: 0.6;
    pointer-events: none;
  `,
    showAllButton: css`
    padding: 0 !important;
    height: auto;
  `,
    title: css`
    margin: 3px;
    color: ${parameters.mainTextColor} !important;
  `,
    resetButton: css`
    padding: 0 !important;
    height: auto;
  `,
  };

});
