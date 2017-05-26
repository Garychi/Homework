import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './config/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
