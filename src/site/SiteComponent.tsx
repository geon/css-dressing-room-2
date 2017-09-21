import * as React from 'react';
import {Site} from './Site';

interface SiteComponentProps {
	site: Site
};

export const SiteComponent = (state: SiteComponentProps) => <p style={state.site}> Test </p>;
