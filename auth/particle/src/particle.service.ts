import { Injectable } from "@nestjs/common";
import { recoverPersonalSignature } from "@metamask/eth-sig-util";

import { phrase } from "@ethberry/constants";
import { IParticleDto } from "@ethberry/types-jwt";

@Injectable()
export class ParticleService {
  public isValidSignature(dto: IParticleDto): boolean {
    const { nonce, wallet, signature } = dto;
    const recovered = recoverPersonalSignature({
      data: `0x${Buffer.from(`${phrase}${nonce}`).toString("hex")}`,
      signature,
    });

    return recovered === wallet.toLowerCase();
  }
}