import { EName } from 'src/enums/name.enum';
import { ERelease } from 'src/enums/release.enum';
import { EPlatform } from 'src/enums/platforms.enum';

export interface IGameCards {
    image: string;
    name: EName;
    release: ERelease;
    price: number;
    platform: EPlatform;
    id: number;
}

