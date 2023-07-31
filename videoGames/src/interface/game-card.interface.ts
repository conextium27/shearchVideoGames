import { EName } from 'src/enums/name.enum';
import { ERelease } from 'src/enums/release.enum';
import { EPlatform } from 'src/enums/platforms.enum';

export interface IGameCards {
    imagen:      string;
    nombre:      EName;
    lanzamiento: ERelease;
    precio:      number;
    plataforma:  EPlatform;
    id:          number;
}

