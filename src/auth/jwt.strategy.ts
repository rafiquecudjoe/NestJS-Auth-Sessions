import { PassportStrategy } from "@nestjs/passport";
import { Strategy,ExtractJwt} from "passport-jwt";


export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            secretOrKey:process.env.SECRET,
            ignoreExpiration: false,
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload: any) {

        return {
            id: payload.sub,
            name:payload.name
        }
     
 }   
}