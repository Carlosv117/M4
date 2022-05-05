import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from "typeorm"

@Entity("order")
class Order{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    desk: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export default Order