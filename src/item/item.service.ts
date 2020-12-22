import { Inject, Injectable } from '@nestjs/common';
import { Item } from "src/entities/item.entity";
import { DeleteResult, InsertResult, Repository, UpdateResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateItemDTO } from "./item.dto";
@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>
  ) { }
  
  // テーブル全データを取得する関数
  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  // テーブルにレコードを追加する関数
  async create(item: CreateItemDTO): Promise<InsertResult> {
    return await this.itemRepository.insert(item);
  }

  //idを指定してテーブルから取得
  async find(id: number): Promise<Item> | null {
    return await this.itemRepository.findOne({ id: id });
  }

  //idを指定してテーブルのデータを更新
  async update(id: number, item): Promise<UpdateResult> {
    return await this.itemRepository.update(id, item);
  }

  //idを指定してレコードを削除
  async delete(id: number): Promise<DeleteResult> {
    return await this.itemRepository.delete(id);
  }
}
